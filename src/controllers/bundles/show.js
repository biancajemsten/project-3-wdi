function BundlesShowCtrl( $scope, $http, $state){

  $http({
    method: 'GET',
    url: `/api/bundles/${$state.params.id}`
  })
    .then(res => $scope.bundle = res.data);


  $http({
    method: 'GET',
    url: '/api/users'
  })
    .then(res => $scope.users = res.data);


  $scope.deleteBundle = function(){
    $http({
      method: 'DELETE',
      url: `/api/bundles/${$state.params.id}`
    })
      .then(() => $state.go('usersShow', { id: $scope.currentUserId }));
  };

  $scope.addAttendee = function(user){
    const data = {
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName
    };
    $http({
      method: 'POST',
      url: `/api/bundles/${$state.params.id}/attendees`,
      data: data
    })
      .then(res => {
        $scope.bundle = res.data;
        $scope.search = '';
      });
  };
}



export default BundlesShowCtrl;
