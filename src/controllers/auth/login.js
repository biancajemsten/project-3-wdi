function AuthLoginCtrl($scope, $auth, $state){
  $scope.data = {};

  $scope.handleSubmit = function() {
    $auth.login($scope.data)
      .then(() => $state.go('bundlesNew'));
  };
}


export default AuthLoginCtrl;