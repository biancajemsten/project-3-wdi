function UsersShowCtrl($scope, $http, $state){

  $scope.genres = {
    option1: 'Rock',
    option2: 'Blues',
    option3: 'Jazz',
    option4: 'Swedish Pop'
  };

  $http({
    method: 'GET',
    url: `/api/users/${$state.params.id}`
  })
    .then(res => {
      $scope.user = res.data;
    });

  $scope.today = new Date();
  $scope.currentDate = $scope.today.getDate();
  $scope.currentMonth = $scope.today.getMonth();
  $scope.currentYear = $scope.today.getFullYear();

  $scope.addGenre = function(genre){
    if(!$scope.user.musicGenres.includes(genre)) $scope.user.musicGenres.push(genre);

    $http({
      method: 'PUT',
      url: `/api/users/${$state.params.id}`,
      data: $scope.data
    });
  };

  $scope.deleteGenre = function(genre) {
    $scope.user.musicGenres.splice($scope.user.musicGenres.indexOf(genre), 1);

    $http({
      method: 'PUT',
      url: `/api/users/${$state.params.id}`,
      data: $scope.data
    });
  };
}

export default UsersShowCtrl;
