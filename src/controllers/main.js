function MainCtrl($scope, $auth, $state, $rootScope, $timeout, $transitions){
  $scope.isAuthenticated = $auth.isAuthenticated;
  $scope.navbarOpen = false;

  $transitions.onSuccess({}, () => {
    $scope.navbarOpen = false;
  });

  if($auth.isAuthenticated()) $scope.currentUserId = $auth.getPayload().sub;

  console.log($scope.currentUserId);

  $rootScope.$on('flashMessage', (e, data) => {
    $scope.flashMessage = data;

    $timeout(() => $scope.flashMessage = null, 4000);
  });

  $scope.toggleMenu = function() {
    $scope.navbarOpen = !$scope.navbarOpen;
  };

  $scope.logout =function() {
    $auth.logout();
    $state.go('home');
  };
}

export default MainCtrl;
