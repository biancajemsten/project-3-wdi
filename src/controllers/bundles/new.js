function BundlesNewCtrl($scope, $http){
  $scope.data= {};
  $scope.hideEvents = false,
  $scope.pickedEvent = {};


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
