function AuthLoginCtrl($scope, $auth, $state){
  $scope.data = {};

  $scope.handleSubmit = function() {
    console.log($scope.data);
    $auth.login($scope.data)
      .then(() => $state.go('bundlesNew'));
  };
}


export default AuthLoginCtrl;
