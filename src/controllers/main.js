function MainCtrl($scope, $auth, $state, $rootScope, $timeout){
  $scope.isAuthenticated = $auth.isAuthenticated;

  if($auth.isAuthenticated()) $scope.currentUserId = $auth.getPayload().sub;

  $rootScope.$on('flashMessage', (e, data) => {
    $scope.flashMessage = data;

    $timeout(() => $scope.flashMessage = null, 4000);
  });
  $scope.logout =function() {
    $auth.logout();
    $state.go('home');
  };
}

export default MainCtrl;
