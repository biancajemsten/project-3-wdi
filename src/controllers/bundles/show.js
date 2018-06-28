
function BundlesShowCtrl( $scope, $http, $state){
  $scope.currentLocation = {};
  $scope.travelTime = {};
  $scope.hideTravelTime = true;
  $scope.hideGetTravelTime = false;
  $scope.isCreator = false;
  let destinationLocation = null;


  $http({
    method: 'GET',
    url: `/api/bundles/${$state.params.id}`
  })
    .then(res => {
      $scope.bundle = res.data;
      $scope.testEventCoverage($scope.bundle.event.location);
      if($scope.currentUser._id === $scope.bundle.creator._id) $scope.isCreator = true;
      if(!$scope.bundle.bar) destinationLocation = $scope.bundle.restaurant.location;
      else if(!$scope.bundle.restaurant) destinationLocation = $scope.bundle.bar.location;
    });

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
      .then(() => $state.go('usersShow', { id: $scope.currentUser._id }));
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
          $scope.search = '';
          $scope.bundle = res.data;
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
    console.log($scope.currentLocation);
  };

  $scope.testEventCoverage = function(location){
    $http({
      method: 'GET',
      url: 'api/coverageTest',
      params: {
        lat: location.lat,
        lng: location.lng
      }
    })
      .then(res => {
        $scope.eventCoverageTest = res.data;
        if($scope.eventCoverageTest.points[0].covered === false) $scope.hideGetTravelTime = true;
      });
  };

  $scope.testCoverage = function(){
    $http({
      method: 'GET',
      url: 'api/coverageTest',
      params: {
        lat: $scope.currentLocation.lat,
        lng: $scope.currentLocation.lng
      }
    })
      .then(res => {
        $scope.coverageTest = res.data;
      });
  };

  $scope.getTravelTime = function(){
    if(destinationLocation === null) destinationLocation = $scope.chooseLocation;
    $http({
      method: 'GET',
      url: 'api/travelTime',
      params: {
        lat: $scope.currentLocation.lat,
        lng: $scope.currentLocation.lng,
        destinationLat: destinationLocation.lat,
        destinationLng: destinationLocation.lng
      }
    })
      .then(res => {
        $scope.travelTime = res.data;
        $scope.hideTravelTime = false;
      });
  };

}
export default BundlesShowCtrl;
