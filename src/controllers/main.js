function MainCtrl($scope, $auth, $state){
  $scope.isAuthenticated = $auth.isAuthenticated;

  if($auth.isAuthenticated()) $scope.currentUserId = $auth.getPayload().sub;

  $scope.logout =function() {
    $auth.logout();
    $state.go('home');
  };
}

export default MainCtrl;
