function MainCtrl($scope, $auth, $state){

  $scope.logout =function() {
    $auth.logout();
    $state.go('home');
  };
}

export default MainCtrl;
