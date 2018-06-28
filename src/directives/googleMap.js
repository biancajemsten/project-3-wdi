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
        center: { lat: 51.515, lng: -0.072},
        styles: [
          {
            'featureType': 'administrative',
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'color': '#6195a0'
              }
            ]
          },
          {
            'featureType': 'administrative.province',
            'elementType': 'geometry.stroke',
            'stylers': [
              {
                'visibility': 'off'
              }
            ]
          },
          {
            'featureType': 'landscape',
            'elementType': 'geometry',
            'stylers': [
              {
                'lightness': '0'
              },
              {
                'saturation': '0'
              },
              {
                'color': '#f5f5f2'
              },
              {
                'gamma': '1'
              }
            ]
          },
          {
            'featureType': 'landscape.man_made',
            'elementType': 'all',
            'stylers': [
              {
                'lightness': '-3'
              },
              {
                'gamma': '1.00'
              }
            ]
          },
          {
            'featureType': 'landscape.natural.terrain',
            'elementType': 'all',
            'stylers': [
              {
                'visibility': 'off'
              }
            ]
          },
          {
            'featureType': 'poi',
            'elementType': 'all',
            'stylers': [
              {
                'visibility': 'off'
              }
            ]
          },
          {
            'featureType': 'poi.park',
            'elementType': 'geometry.fill',
            'stylers': [
              {
                'color': '#bae5ce'
              },
              {
                'visibility': 'on'
              }
            ]
          },
          {
            'featureType': 'road',
            'elementType': 'all',
            'stylers': [
              {
                'saturation': -100
              },
              {
                'lightness': 45
              },
              {
                'visibility': 'simplified'
              }
            ]
          },
          {
            'featureType': 'road.highway',
            'elementType': 'all',
            'stylers': [
              {
                'visibility': 'simplified'
              }
            ]
          },
          {
            'featureType': 'road.highway',
            'elementType': 'geometry.fill',
            'stylers': [
              {
                'color': '#fac9a9'
              },
              {
                'visibility': 'simplified'
              }
            ]
          },
          {
            'featureType': 'road.highway',
            'elementType': 'labels.text',
            'stylers': [
              {
                'color': '#4e4e4e'
              }
            ]
          },
          {
            'featureType': 'road.arterial',
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'color': '#787878'
              }
            ]
          },
          {
            'featureType': 'road.arterial',
            'elementType': 'labels.icon',
            'stylers': [
              {
                'visibility': 'off'
              }
            ]
          },
          {
            'featureType': 'transit',
            'elementType': 'all',
            'stylers': [
              {
                'visibility': 'simplified'
              }
            ]
          },
          {
            'featureType': 'transit.station.airport',
            'elementType': 'labels.icon',
            'stylers': [
              {
                'hue': '#0a00ff'
              },
              {
                'saturation': '-77'
              },
              {
                'gamma': '0.57'
              },
              {
                'lightness': '0'
              }
            ]
          },
          {
            'featureType': 'transit.station.rail',
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'color': '#43321e'
              }
            ]
          },
          {
            'featureType': 'transit.station.rail',
            'elementType': 'labels.icon',
            'stylers': [
              {
                'hue': '#ff6c00'
              },
              {
                'lightness': '4'
              },
              {
                'gamma': '0.75'
              },
              {
                'saturation': '-68'
              }
            ]
          },
          {
            'featureType': 'water',
            'elementType': 'all',
            'stylers': [
              {
                'color': '#eaf6f8'
              },
              {
                'visibility': 'on'
              }
            ]
          },
          {
            'featureType': 'water',
            'elementType': 'geometry.fill',
            'stylers': [
              {
                'color': '#c7eced'
              }
            ]
          },
          {
            'featureType': 'water',
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'lightness': '-49'
              },
              {
                'saturation': '-53'
              },
              {
                'gamma': '0.79'
              }
            ]
          }
        ]
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
        restaurantMarker.setPosition($scope.$parent.bundle.restaurant.location);
        barMarker.setPosition($scope.$parent.bundle.bar.location);

      });
    }
  };

}

export default googleMap;
