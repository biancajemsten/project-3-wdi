/* global google */

function googleMap() {
  return {
    restrict: 'A',
    template: '<div class="map"></div>',
    replace: true,
    scope: {
      location: '='
    },
    link($scope, $element) {
      console.log('googlescope', $scope.$parent);
      const map = new google.maps.Map($element[0], {
        zoom: 15,
        center: { lat: 51.515, lng: -0.072}
      });

      const eventImage = {
        url: 'http://maps.google.com/mapfiles/ms/icons/red.png',
        size: new google.maps.Size(50, 50)
      };
      const restaurantImage = {
        url: 'http://maps.google.com/mapfiles/ms/icons/green.png',
        size: new google.maps.Size(50, 50),
        origin: new google.maps.Point(0, 0)
      };
      const barImage = {
        url: 'http://maps.google.com/mapfiles/ms/icons/blue.png',
        size: new google.maps.Size(50 , 50),
        origin: new google.maps.Point(0, 0)
      };


      const eventMarker = new google.maps.Marker({
        map: map,
        icon: eventImage,
        animation: google.maps.Animation.DROP,
        label: '🎶'
      });
      const restaurantMarker = new google.maps.Marker({
        map: map,
        icon: restaurantImage,
        animation: google.maps.Animation.DROP,
        label: '🍴'
      });
      const barMarker = new google.maps.Marker({
        map: map,
        icon: barImage,
        animation: google.maps.Animation.DROP,
        label: '🍺'
      });

      $scope.$watch('location', () => {
        map.setCenter($scope.location);
        eventMarker.setPosition($scope.$parent.bundle.event.location);
        // console.log('restaurant', $scope.$parent.bundle.event.location);
        restaurantMarker.setPosition($scope.$parent.bundle.restaurant.location);
        // console.log('restaurant', $scope.$parent.bundle.restaurant.location);
        barMarker.setPosition($scope.$parent.bundle.bar.location);
        // console.log('bar', $scope.$parent.bundle.bar.location);

      });
    }
  };

}

export default googleMap;
