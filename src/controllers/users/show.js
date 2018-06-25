function UsersShowCtrl($scope, $http, $state){

  $http({
    method: 'GET',
    url: `/api/users/${$state.params.id}`
  })
    .then(res => {
      $scope.user = res.data;
    });

  $http({
    method: 'GET',
    url: '/api/bundles'
  })
    .then(res => {
      $scope.bundles = res.data;
    });
}

export default UsersShowCtrl;
