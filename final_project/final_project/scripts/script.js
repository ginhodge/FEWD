$(function(){

  var rounds = [{
    lat: 51.515816,
    lng: -0.072246,
    correctAnswer: 'Aldgate East',
    answers: [
       'Aldgate East',
       'Finsbury Park',
       'Elephant and Castle',
       'Bethnal Green',
       'Liverpool Street'
    ]
  }, {
     lat: 48.886388,
     lng: 2.343074,
     correctAnswer: 'Montmatre',
     answers: [
       'Belleville',
       'Bastille',
       'Montmatre',
       'Champs-Elysées',
       'Notre Dame'
    ]

  }, {
    lat: 46.191477,
    lng: -122.195676,
    correctAnswer: 'Mount St Helens',
    answers: [
       'Mount Vesuvious',
       'Mount St Helens',
       'Mount Etna',
       'Mount Fuji',
       'Mount Kilimajaro'
    ]

  },{
    lat: 69.208417,
    lng: -51.141804,
    correctAnswer: 'Greenland',
    answers: [
       'Svalbard',
       'Alaska',
       'Norway',
       'Iceland',
       'Greenland'
    ]

  },{
    lat: 51.515816,
    lng: -0.072246,
    correctAnswer: 'Aldgate East',
    answers: [
       'Aldgate East',
       'Finsbury Park',
       'Elephant and Castle',
       'Bethanl Green',
       'Liverpool Street'
    ]

  }];

  // end game


var currentRoundIndex = null;
var StreetViewElement = document.getElementById('streetview');
var currentRound = 0;

    function loadStreetView() {
      currentRoundIndex = rounds[currentRound];
      if(currentRound != 5){
      panorama = new google.maps.StreetViewPanorama(StreetViewElement , {
        position: {lat: currentRoundIndex.lat, lng: currentRoundIndex.lng},
        pov: {heading: 165, pitch: 0},
        zoom: 1,
        showRoadLabels: false,
        addressControl: false
      });


      $.each(currentRoundIndex.answers, function(index, value) {
        $('<button/>', {
          'text': value
        }).appendTo('body');
      });
}

else{
  window.confirm('Game finished');
}

      $('button').click(function checkAnswer(){
        if($(this).text() === currentRoundIndex.correctAnswer){
          alert("That's right, move into the next round!");
          currentRound++;
          $('button').hide();
          loadStreetView()
          console.log(currentRound);

        }

        else {
          alert('nope,try again');
        }
        
      })
    }
    

    loadStreetView()
  })

// when user arrives - select a country.
// grab a lnglat + name & 4 random places name's
