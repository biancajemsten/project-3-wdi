function BundlesShowCtrl( $scope, $http, $state){

  $http({
    method: 'GET',
    url: `api/bundles/${$state.params.id}`
  })
    .then(res => $scope.bundle = res.data);
}

export default BundlesShowCtrl; 
