function MainCtrl($scope, $auth, $state, $rootScope, $timeout, $transitions){
  $scope.isAuthenticated = $auth.isAuthenticated;
  $scope.navbarOpen = false;

  $transitions.onSuccess({}, () => {
    $scope.navbarOpen = false;
    $scope.isHomepage = $state.$current.name === 'home';
  });

  if($auth.isAuthenticated()) $scope.currentUser = $auth.getPayload().currentUser;

  $scope.setCurrentUser = function(){
    return $scope.currentUser = $auth.getPayload().currentUser;
  };



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
