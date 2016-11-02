(function(){
  // map
  var map = new naver.maps.Map('map', {
    center: new naver.maps.LatLng(37.504836, 127.027206),
    scaleControl: true,
    zoomControl: true,
    mapTypeControl: true,
    zoom: 12
  });

  var marker = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.504836, 127.027206),
    map: map
  });

})();
