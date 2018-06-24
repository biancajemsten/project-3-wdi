function UsersEditCtrl($scope, $http, $state){

  $http({
    method: 'GET',
    url: `/api/users/${$state.params.id}`
  })
    .then(res => $scope.data = res.data);

  $scope.updateUser = function() {
    $http({
      method: 'PUT',
      url: `/api/users/${$state.params.id}`,
      data: $scope.data
    })
      .then(() => $state.go('usersShow', { id: $state.params.id }));
  };
}

export default UsersEditCtrl;
