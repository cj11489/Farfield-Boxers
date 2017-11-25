/*google map using js API*/
function initMap() {
  var mylatlng = {lat: 51.6565817, lng: 0.3568387};

  var map = new google.maps.Map(document.getElementById('map'), {
    center: mylatlng,
    zoom: 10
  });

  var marker = new google.maps.Marker({
  	position: mylatlng,
  	map: map,
  	animation: google.maps.Animation.DROP,
  	title: "Farfield Boxers"
  });

  marker.setMap(map);
}
