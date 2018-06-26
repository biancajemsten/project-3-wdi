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

  $scope.createGenre = function(){
    $http({
      method: 'POST',
      url: `/api/users/${$state.params.id}/genres`
    })
      .then(res => $scope.user = res.data);
  };

  $scope.deleteGenre = function(item) {
    $http({
      method: 'DELETE',
      url: `/api/users/${$state.params.id}/genres/${item._id}`
    })
      .then(res => $scope.user = res.data);
  };
}

export default UsersShowCtrl;
