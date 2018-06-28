/* global google */

function googleAutocomplete() {
  return {
    restrict: 'A',
    require: 'ngModel',
    scope: {
      setCurrentLocation: '&',
      testCoverage: '&'
    },
    link($scope, $element, attrs, ngModel) {
      const autocomplete = new google.maps.places.Autocomplete($element[0]);

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        const location = place.geometry.location.toJSON();
        $scope.setCurrentLocation({ location });
        $scope.testCoverage();
        ngModel.$setViewValue(place.formatted_address);
      });
    }
  };
}

export default googleAutocomplete;
