
var lat = 51.515816;
var lng = -0.072246;

var panorama;
      function initialize() {
        panorama = new google.maps.StreetViewPanorama(
            document.getElementById('streetview'),
            {
              position: {lat:lat, lng:lng},
              pov: {heading: 165, pitch: 0},
              zoom: 1,
              showRoadLabels: false,
              addressControl: false

            });

      }








