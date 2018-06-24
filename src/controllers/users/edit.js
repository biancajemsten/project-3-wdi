function UsersEditCtrl($scope, $http, $state){

  $http({
    method: 'GET',
    url: `/api/users/${$state.params.id}`
  })
    .then(res => $scope.data = res.data);
}

export default UsersEditCtrl;
