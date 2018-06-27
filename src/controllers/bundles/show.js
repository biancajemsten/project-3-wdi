function BundlesShowCtrl( $scope, $http, $state){
  $scope.currentLocation = {};
  $scope.destinationLocation = {};
  $scope.travelTime = {};
  $scope.hideTravelTime = true;

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
    if(!$scope.bundle.attendees.includes(user)){
      const data = {
        userId: user._id,
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
    }
  };

  $scope.removeAttendee = function(attendee){
    $http({
      method: 'DELETE',
      url: `/api/bundles/${$state.params.id}/attendees/${attendee._id}`
    })
      .then(res => $scope.bundle = res.data);
  };

  $scope.setCurrentLocation = function(location){
    $scope.currentLocation = location;
  };

  $scope.selectDestination = function(location){
    console.log(location);
    $scope.destinationLocation = location;
  };

  $scope.getTravelTime = function(){
    $http({
      method: 'GET',
      url: 'api/travelTime',
      params: {
        lat: $scope.currentLocation.lat,
        lng: $scope.currentLocation.lng,
        destinationLat: $scope.destinationLocation.lat,
        destinationLng: $scope.destinationLocation.lng
      }
    })
      .then(res => {
        $scope.travelTime = res.data;
        $scope.hideTravelTime = false;
      });
  };

}



export default BundlesShowCtrl;
