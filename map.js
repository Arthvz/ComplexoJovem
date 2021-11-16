let map;

function initMap() {
    const myLatLng = { lat: -23.608969571341117, lng: -46.75031962083235 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: myLatLng,
    });

    var beachMarker = new google.maps.Marker({
        position: new google.maps.LatLng(-23.648726, -46.847502),
        map: map,
        icon: 'brown_marker.png',
        title: "Pronto Socorro Central (Insatisfação)",
      });

    var beachMarker = new google.maps.Marker({
      position: new google.maps.LatLng(-23.630100572243702,-46.82668089866638),
      map: map,
      icon: 'green_marker.png',
      title: "Rua Anápolis (Queria que aqui não fosse...)",
    });

    var beachMarker = new google.maps.Marker({
        position: new google.maps.LatLng(-23.619627,-46.771811),
        map: map,
        icon: 'red_marker.png',
        title: "Praça do Taboão (Locais de Agressão)",
      });-23.619627,-46.771811
}
