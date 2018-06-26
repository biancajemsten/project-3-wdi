function BundlesShowCtrl( $scope, $http, $state){

  $http({
    method: 'GET',
    url: `api/bundles/${$state.params.id}`
  })
    .then(res => $scope.bundle = res.data);

  $scope.deleteBundle = function(){
    $http({
      method: 'DELETE',
      url: `/api/bundles/${$state.params.id}`
    })
      .then(() => $state.go('usersShow', { id: $scope.currentUserId }));
  };
}


export default BundlesShowCtrl;
