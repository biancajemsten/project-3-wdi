function AuthLoginCtrl($scope, $auth, $state, $rootScope){
  $scope.data = {};

  $scope.handleSubmit = function() {
    console.log($scope.data);
    $auth.login($scope.data)
      .then(() => {
        $state.go('bundlesNew');
        $scope.setCurrentUser();
      })
      .catch(() => {
        $rootScope.$broadcast('flashMessage', {
          type: 'danger',
          content: 'Invalid credentials'
        });
      });
  };
}


export default AuthLoginCtrl;
