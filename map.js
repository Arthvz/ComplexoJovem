let map;

function initMap() {
    const myLatLng = { lat: -23.608969571341117, lng: -46.75031962083235 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 5,
      center: myLatLng,
    });
    
    var beachMarker = new google.maps.Marker({
        position: new google.maps.LatLng(-23.619627,-46.771811),
        map: map,
        icon: 'red_marker.png',
        title: "Praça do Taboão (Locais de Agressão)",
      });
    
    var beachMarker = new google.maps.Marker({
        position: new google.maps.LatLng(-23.628081,-46.826238),
        map: map,
        icon: 'red_marker.png',
        title: "EE Amélia dos Anjos Oliveira (Locais de Agressão)",
      });
    
    var beachMarker = new google.maps.Marker({
        position: new google.maps.LatLng(-23.58573961427639,-46.744582176208496),
        map: map,
        icon: 'red_marker.png',
        title: "A mata (Locais de Agressão)",
      });
    
    var beachMarker = new google.maps.Marker({
        position: new google.maps.LatLng(-23.592858893816615,-46.731961509579826),
        map: map,
        icon: 'red_marker.png',
        title: "Emef Arthur Whitaker (Locais de Agressão)",
      });
    
    var beachMarker = new google.maps.Marker({
        position: new google.maps.LatLng(-23.57973109465769,-46.74542447179543),
        map: map,
        icon: 'red_marker.png',
        title: "Ponto 4 (Locais de Agressão)",
      });
    
    var beachMarker = new google.maps.Marker({
        position: new google.maps.LatLng(-23.662990610128766,-46.79589254234524),
        map: map,
        icon: 'red_marker.png',
        title: "Rua Moura (Locais de Agressão)",
      });
    
    var beachMarker = new google.maps.Marker({
        position: new google.maps.LatLng(-23.631064050595043,-46.759146266287814),
        map: map,
        icon: 'red_marker.png',
        title: "Ponto 7 (Locais de Agressão)",
      });
    
    var beachMarker = new google.maps.Marker({
        position: new google.maps.LatLng(-23.65341412688766,-46.85591461997084),
        map: map,
        icon: 'darkgreen_marker.png',
        title: "EE Prof° Eulália Malta (Lugares onde eu vacilo)",
      });
    
    var beachMarker = new google.maps.Marker({
        position: new google.maps.LatLng(-23.61909048123952,-46.803998207934555),
        map: map,
        icon: 'darkgreen_marker.png',
        title: "EE Laert de Almeida São Bernardo (Lugares onde eu vacilo)",
      });
    
    var beachMarker = new google.maps.Marker({
        position: new google.maps.LatLng(-23.591008781032833,-46.74469987619625),
        map: map,
        icon: 'darkgreen_marker.png',
        title: "Campão (Lugares onde eu vacilo)",
      });
    
    var beachMarker = new google.maps.Marker({
        position: new google.maps.LatLng(-23.588295,-46.7355005),
        map: map,
        icon: 'darkgreen_marker.png',
        title: "Bar do salsicha (Lugares onde eu vacilo)",
      });
    
    var beachMarker = new google.maps.Marker({
        position: new google.maps.LatLng(-23.671551314630612,-46.80040890426445),
        map: map,
        icon: 'darkgreen_marker.png',
        title: "Escolinha (Lugares onde eu vacilo)",
      });
    
    var beachMarker = new google.maps.Marker({
        position: new google.maps.LatLng(-23.62981920672397,-46.75968292937303),
        map: map,
        icon: 'darkgreen_marker.png',
        title: "Condomínio Floresta (Lugares onde eu vacilo)",
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
}
