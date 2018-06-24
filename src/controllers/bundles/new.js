function BundlesNewCtrl($scope, $http){
  $scope.data= {};


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

  $scope.choseEvent = function(event){
    $http({
      method: 'GET',
      url: 'api/findPlaces',
      params: {
        lat: event.venue.latitude,
        lng: event.venue.longitude,
        radius: 1000
      }
    })
      .then(res => $scope.restaurants = res.data.results);
  };
}

export default BundlesNewCtrl;
