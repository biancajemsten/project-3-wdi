function BundlesNewCtrl($scope, $http){
  $scope.data= {};
  $scope.hideEvents = false;
  $scope.hideRestaurants = false;
  $scope.hideBars = false;
  $scope.pickedEvent = {};
  $scope.pickedRestaurant = {};
  $scope.pickedBar = {};


  //search function only works if the user searches in one keyword
  // possibly still only shows up to 20 results
  $scope.searchEvents = function() {
    $http({
      method: 'GET',
      url: '/api/events',
      params: {
        keyword: $scope.search
      }
    })
      .then(res => {
        $scope.events = res.data.results;
      });
  };

  $scope.chooseRestaurant = function(restaurant){
    $scope.hideRestaurants = true;
    $scope.pickedRestaurant = {
      name: restaurant.name,
      priceLevel: restaurant.price_level,
      rating: restaurant.rating,
      location: {
        lat: restaurant.geometry.location.lat,
        lng: restaurant.geometry.location.lng
      }
    };
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
      }
    };
  };

  //function that sends a request to get bar and restaurant info based on the location of the picked event. Also hides the full list of events and only displays picked one.
  $scope.choseEvent = function(event){
    $scope.hideEvents = true;
    $scope.pickedEvent = {
      name: event.eventname,
      venue: event.venue.name,
      date: event.date,
      ticketPrice: event.entryprice
    };
    $http({
      method: 'GET',
      url: 'api/findPlaces',
      params: {
        lat: event.venue.latitude,
        lng: event.venue.longitude,
        radius: 1000,
        type: 'restaurant'
      }
    })
      .then(res => $scope.restaurants = res.data.results);
    $http({
      method: 'GET',
      url: 'api/findPlaces',
      params: {
        lat: event.venue.latitude,
        lng: event.venue.longitude,
        radius: 3000,
        type: 'bar'
      }
    })
      .then(res=> $scope.bars = res.data.results);
  };


}

export default BundlesNewCtrl;
