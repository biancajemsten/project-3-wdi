function UsersShowCtrl($scope, $http, $state){
  
  $state.params.currentUser = $scope.currentUser;

  $http({
    method: 'GET',
    url: `/api/users/${$state.params.id}`
  })
    .then(res => {
      $scope.user = res.data;
    });
}

export default UsersShowCtrl;
