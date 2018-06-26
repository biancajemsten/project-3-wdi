function BundlesShowCtrl( $scope, $http, $state){
  $scope.currentLocation = {};

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

  $scope.getTravelTime = function(bundle){
    $http({
      method: 'GET',
      url: 'api/travelTime',
      params: {
        lat: $scope.currentLocation.lat,
        lng: $scope.currentLocation.lng,
        eventLat: bundle.event.location.lat,
        eventLng: bundle.event.location.lng
      }
    })
      .then(res => {
        $scope.bundle = res.data;
      });
  };
}



export default BundlesShowCtrl;
