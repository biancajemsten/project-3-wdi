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

      const eventImage = {
        url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        size: new google.maps.Size(20, 32),
        origin: new google.maps.Point(0, 0)
      };
      const restaurantImage = {
        url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        size: new google.maps.Size(20, 32),
        origin: new google.maps.Point(0, 0)
      };
      const barImage = {
        url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        size: new google.maps.Size(20, 32),
        origin: new google.maps.Point(0, 0)
      };


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
        eventMarker.setPosition($scope.location);
        restaurantMarker.setPosition($scope.restaurant.location);
        barMarker.setPosition($scope.bar.location);

      });
    }
  };

}

export default googleMap;
