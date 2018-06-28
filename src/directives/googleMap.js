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

      const eventImage = 'https://imgur.com/TvETKxu.png';
      const restaurantImage = 'https://imgur.com/EXuGU96.png';
      const barImage = 'https://imgur.com/4iptF70.png';

      const eventMarker = new google.maps.Marker({
        map: map,
        icon: eventImage,
        animation: google.maps.Animation.DROP
      });
      const restaurantMarker = new google.maps.Marker({
        map: map,
        icon: restaurantImage,
        animation: google.maps.Animation.DROP
      });
      const barMarker = new google.maps.Marker({
        map: map,
        icon: barImage,
        animation: google.maps.Animation.DROP
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
