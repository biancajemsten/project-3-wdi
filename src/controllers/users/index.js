function UsersIndexCtrl($scope, $http) {

  $http({
    method: 'GET',
    url: '/api/users'
  })
    .then(res => $scope.users = res.data);

  $http({
    method: 'GET',
    url: '/api/bundles'
  })
    .then(res => $scope.bundles = res.data);
}

export default UsersIndexCtrl;