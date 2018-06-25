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

      const map = new google.maps.Map($element[0], {
        zoom: 14,
        center: { lat: 51.515, lng: -0.072}
      });

      const marker = new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.DROP
      });

      $scope.$watch('location', () => {
        map.setCenter($scope.location);
        marker.setPosition($scope.location);

      });
    }
  };

}

export default googleMap;
