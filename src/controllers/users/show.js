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
      $scope.dates = $scope.bundles.forEach((bundle) => {
        $scope.eventDate = bundle.event.date.split('-');
      });
    });

  $scope.today = new Date();
  $scope.currentDate = $scope.today.getDate();
  $scope.currentMonth = $scope.today.getMonth();
  $scope.currentYear = $scope.today.getFullYear();

}

export default UsersShowCtrl;
