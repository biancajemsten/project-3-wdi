function BundlesNewCtrl($scope, $http){
  $scope.data= {};

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
}

export default BundlesNewCtrl;
