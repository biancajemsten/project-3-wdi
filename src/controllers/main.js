function MainCtrl($scope, $auth, $state){


  $scope.currentUserId = $auth.getPayload().sub;

  $scope.logout =function() {
    $auth.logout();
    $state.go('home');
  };
}

export default MainCtrl;
