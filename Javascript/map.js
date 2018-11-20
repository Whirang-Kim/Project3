function initMap(){
  var koreatech = {lat: 36.764512, lng: 127.282556};
  var campus1 = {lat: 36.763691, lng: 127.281916};
  var campus2 = {lat: 36.765556, lng: 127.280575};
  var dorm = {lat:36.761508, lng: 127.283150};
  var map = new google.maps.Map(
    document.getElementById('map'), {
    zoom: 15, center: koreatech
    }
 );
 
 var first = new google.maps.Marker({
    position: koreatech,
    map: map
  });

  var second = new google.maps.Marker({
    position: campus1,
    map: map
  });

  var third = new google.maps.Marker({
    position: campus2,
    map: map
  });
  
  var fourth = new google.maps.Marker({
    position: dorm,
	map: map
  });
}