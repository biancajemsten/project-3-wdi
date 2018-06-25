function BundlesNewCtrl($scope, $http, $state){
  $scope.data= {};
  $scope.hideEvents = false;
  $scope.hideRestaurants = false;
  $scope.hideBars = false;
  $scope.toggleDetails = true;
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


  //search function only works if the user searches in one keyword
  // possibly still only shows up to 20 results
  $scope.searchEvents = function() {
    $http({
      method: 'GET',
      url: '/api/events',
      params: { keyword: $scope.search, radius: $scope.radius }
    })
      .then(res => {
        $scope.events = res.data.results;
      });
  };

  //currently not in use
  $scope.getDetails = function(place){
    $http({
      method: 'GET',
      url: '/api/findDetails',
      params: { place_id: place.place_id}
    })
      .then(res => {
        console.log(res.data);
        $scope.details = res.data.result;
        $scope.toggleDetails = false;
      });
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
      location: {
        lat: restaurant.geometry.location.lat,
        lng: restaurant.geometry.location.lng
      },
      place_id: restaurant.place_id
    };
    return pickedRestaurant = $scope.pickedRestaurant;
  };

  $scope.chooseBar = function(bar){
    $scope.hideBars = true;
    $scope.pickedBar = {
      name: bar.name,
      priceLevel: bar.price_level,
      rating: bar.rating,
      location: {
        lat: bar.geometry.location.lat,
        lng: bar.geometry.location.lng
      },
      place_id: bar.place_id
    };
    return pickedBar = $scope.pickedBar;
  };

  //function that sends a request to get bar and restaurant info based on the location of the picked event. Also hides the full list of events and only displays picked one.
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
              // const photoReference = res.data.result.photos[0].photo_reference;
              // $http({
              //   method: 'GET',
              //   url: '/api/findPhotos',
              //   params: {photo_reference: photoReference}
              // })
              //   .then(res => {
              //     return res;
              //   });
            });
        });
      });
    $http({
      method: 'GET',
      url: 'api/findPlaces',
      params: {
        lat: event.venue.latitude,
        lng: event.venue.longitude,
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
    return pickedEvent = $scope.pickedEvent;
  };

  $scope.createBundle = function(){
    $http({
      method: 'POST',
      url: 'api/bundles',
      data: {
        event: pickedEvent,
        bar: {
          name: pickedBar.name,
          location: {
            lat: pickedBar.location.lat,
            lng: pickedBar.location.lat
          }
        },
        restaurant: {
          name: pickedRestaurant.name,
          location: {
            lat: pickedRestaurant.location.lat,
            lng: pickedRestaurant.location.lng
          }
        }
      }
    })
      .then(() => $state.go('home'));
  };

}

export default BundlesNewCtrl;
