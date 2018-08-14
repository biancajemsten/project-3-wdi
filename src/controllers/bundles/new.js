function BundlesNewCtrl($scope, $http, $state){
  $scope.data= {};
  $scope.hideEvents = false;
  $scope.hideRestaurants = false;
  $scope.hideBars = false;
  $scope.pickedEvent = {};
  let pickedEvent;
  let pickedRestaurant;
  let pickedBar;
  $scope.pickedRestaurant = {};
  $scope.pickedBar = {};
  $scope.details = {};
  $scope.events = [];
  $scope.currentShowRestaurant = '';
  $scope.currentShowBar = '';
  $scope.skipRestaurant = false;



  $scope.searchEvents = function() {
    const keyword = $scope.search.replace(' ','_');
    $http({
      method: 'GET',
      url: '/api/events',
      params: { keyword: keyword}
    })
      .then(res => {
        $scope.events = res.data.results;
      });
  };

  //function that sends a request to restaurant info based on the location of the picked event. Also hides the full list of events and only displays picked one.
  $scope.choseEvent = function(event){
    $scope.hideEvents = true;
    $scope.pickedEvent = {
      name: event.eventname,
      venue: event.venue.name,
      date: event.date,
      address: event.venue.address + ', ' +  event.venue.town,
      ticketPrice: event.entryprice,
      description: event.description,
      startTime: event.openingtimes.doorsopen,
      eventType: event.EventCode,
      location: {
        lat: event.venue.latitude,
        lng: event.venue.longitude
      }
    };
    $http({
      method: 'GET',
      url: 'api/findPlaces',
      params: {
        lat: event.venue.latitude,
        lng: event.venue.longitude,
        radius: $scope.radius,
        type: 'restaurant'
      }
    })
      .then(res => {
        $scope.restaurants = res.data.results;
        res.data.results.forEach(item => {
          $http({
            method: 'GET',
            url: '/api/findDetails',
            params: { place_id: item.place_id}
          })
            .then(res => {
              item.details= res.data.result;
            });
        });
      });
    pickedEvent = $scope.pickedEvent;
  };

  //function that finds bars close to the picked event
  $scope.findBars = function(){
    $http({
      method: 'GET',
      url: 'api/findPlaces',
      params: {
        lat: pickedEvent.location.lat,
        lng: pickedEvent.location.lng,
        radius: $scope.radius,
        type: 'bar'
      }
    })
      .then(res => {
        $scope.bars = res.data.results;
        res.data.results.forEach(item => {
          $http({
            method: 'GET',
            url: '/api/findDetails',
            params: { place_id: item.place_id}
          })
            .then(res => {
              item.details= res.data.result;
            });
        });
      });
  };

  $scope.skipRestaurants = function(){
    $scope.findBars();
    $scope.skipRestaurant = true;
  };

  //functions that show or hide place details depending on if they are currently showing by setting the currentShow to their id or an empty string.
  $scope.showDetailsRestaurant = function(restaurant){
    if(restaurant.id === $scope.currentShowRestaurant){
      $scope.currentShowRestaurant = '';
    }else{
      $scope.currentShowRestaurant = restaurant.id;
    }
  };
  $scope.showDetailsBar = function(bar){
    if(bar.id === $scope.currentShowBar){
      $scope.currentShowBar = '';
    }else{
      $scope.currentShowBar = bar.id;
    }
  };

  //function that hides the other restaurants and saves the details of the picked restaurant
  $scope.chooseRestaurant = function(restaurant){
    $scope.hideRestaurants = true;
    $scope.pickedRestaurant = {
      name: restaurant.name,
      priceLevel: restaurant.price_level,
      rating: restaurant.rating,
      address: restaurant.details.formatted_address,
      website: restaurant.details.website,
      openingHours: {
        monday: restaurant.details.opening_hours.weekday_text[0],
        tuesday: restaurant.details.opening_hours.weekday_text[1],
        wednesday: restaurant.details.opening_hours.weekday_text[2],
        thursday: restaurant.details.opening_hours.weekday_text[3],
        friday: restaurant.details.opening_hours.weekday_text[4],
        saturday: restaurant.details.opening_hours.weekday_text[5],
        sunday: restaurant.details.opening_hours.weekday_text[6]
      },
      location: {
        lat: restaurant.geometry.location.lat,
        lng: restaurant.geometry.location.lng
      },
      place_id: restaurant.place_id
    };
    pickedRestaurant = $scope.pickedRestaurant;
    $scope.findBars();
  };

  $scope.chooseBar = function(bar){
    $scope.hideBars = true;
    $scope.pickedBar = {
      name: bar.name,
      priceLevel: bar.price_level,
      rating: bar.rating,
      address: bar.details.formatted_address,
      website: bar.details.website,
      openingHours: {
        monday: bar.details.opening_hours.weekday_text[0],
        tuesday: bar.details.opening_hours.weekday_text[1],
        wednesday: bar.details.opening_hours.weekday_text[2],
        thursday: bar.details.opening_hours.weekday_text[3],
        friday: bar.details.opening_hours.weekday_text[4],
        saturday: bar.details.opening_hours.weekday_text[5],
        sunday: bar.details.opening_hours.weekday_text[6]
      },
      location: {
        lat: bar.geometry.location.lat,
        lng: bar.geometry.location.lng
      },
      place_id: bar.place_id
    };
    return pickedBar = $scope.pickedBar;
  };

  $scope.createBundle = function(){
    $http({
      method: 'POST',
      url: 'api/bundles',
      data: {
        event: pickedEvent,
        bar: pickedBar,
        restaurant: pickedRestaurant
      }
    })
      .then(res => $state.go('bundlesShow', { id: res.data._id }));
  };

}

export default BundlesNewCtrl;
