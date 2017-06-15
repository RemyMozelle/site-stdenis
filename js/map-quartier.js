function initMap() {
  var locations = [
    ["Chaudron <br> <img src='../images/chaudron.jpg' class='resize' alt=''>  <br> <a href='chaudron.html' type='button' class='btn btn-info'>voir son site dédié</a>", -20.8931188, 55.49162849999993],

    ["Trinité <br> <img src='../images/trinite.jpg' class='resize' alt=''>  <br> <a href='trinite.html' type='button' class='btn btn-info'>voir son site dédié</a>", -20.8948895, 55.46516180000003],

    ["Champ Fleuri <br> <img src='../images/champ-fleuri.jpg' class='resize' alt=''>  <br> <a href='champ-fleuri.html' type='button' class='btn btn-info'>voir son site dédié</a>‎‎", -20.8857654, 55.46626689999994],

    ["La Montagne <br> <img src='../images/la-montagne.jpg' class='resize' alt=''>  <br> <a href='la-montagne.html' type='button' class='btn btn-info'>voir son site dédié</a>‎", -20.9012914, 55.4084034],

    ["Le Moufia <br> <img src='../images/moufia.jpg' class='resize' alt=''>  <br> <a href='moufia.html' type='button' class='btn btn-info'>voir son site dédié</a>‎", -20.9106808, 55.48316610000006],

    ["Bois de Nèfles <br> <img src='../images/boisdenefles.jpg' class='resize' alt=''>  <br> <a href='bois-de-nefles.html' type='button' class='btn btn-info'>voir son site dédié</a>‎", -20.9340583, 55.47208610000007],

    ["Le Butor <br> <img src='../images/butor.jpg' class='resize' alt=''>  <br> <a href='butor.html' type='button' class='btn btn-info'>voir son site dédié</a>", -20.8883845, 55.47070120000001],

    ["Les Camélias <br> <img src='../images/camelia.jpg' class='resize' alt=''>  <br> <a href='camelia.html' type='button' class='btn btn-info'>voir son site dédié</a>‎", -20.8947435, 55.461699899999985],

    ["Domenjod <br> <img src='../images/domenjod.jpg' class='resize' alt=''>  <br> <a href='domenjod.html' type='button' class='btn btn-info'>voir son site dédié</a>‎", -20.9157612, 55.50533029999997],

    ["Montgaillard‎ <br> <img src='../images/mercure.jpg' class='resize' alt=''>  <br> <a href='montgaillard.html' type='button' class='btn btn-info'>voir son site dédié</a>", -20.9058911, 55.46793149999996],

    ["Petite Île <br> <img src='../images/petiteile.jpg' class='resize' alt=''>  <br> <a href='petite-ile.html' type='button' class='btn btn-info'>voir son site dédié</a>", -20.8806737, 55.44290590000003],

    ["La Providence <br> <img src='../images/la-providence.jpg' class='resize' alt=''>  <br> <a href='la-providence.html' type='button' class='btn btn-info'>voir son site dédié</a>", -20.9043277, 55.45546880000006],

    ["Quartier Saint-Jacques <br> <img src='../images/stjac.jpg' class='resize' alt=''>  <br> <a href='quartier-saint-jacques.html' type='button' class='btn btn-info'>voir son site dédié</a>‎", -20.8768526, 55.44847200000004],

    ["Ruisseau des Noirs <br> <img src='../images/saint-francois.jpg' class='resize' alt=''>  <br> <a href='ruisseau-des-noirs.html' type='button' class='btn btn-info''>voir son site dédié</a>", -20.8873627, 55.453785100000005],

    ["Saint François <br> <img src='../images/saint-francois.jpg' class='resize' alt=''>  <br> <a href='saint-francois.html' type='button' class='btn btn-info''>voir son site dédié</a>", -20.9250592, 55.45546880000006],

    ["Sainte-Clotilde‎ <br> <img src='../images/sainte-clotilde.jpg' class='resize' alt=''>  <br> <a href='sainte-clotilde.html' type='button' class='btn btn-info'>voir son site dédié</a>", -20.9190923, 55.48593630000005],

    ["La Source‎ <br> <img src='../images/lasource.jpg' class='resize' alt=''>  <br> <a href='la-source.html' type='button' class='btn btn-info'>voir son site dédié</a>", -20.8908983, 55.4481131],

    ["Bas de la Rivière‎ <br> <img src='../images/blr.jpg' class='resize' alt=''>  <br> <a href='bas-de-la-riviere.html' type='button' class='btn btn-info'>voir son site dédié</a>", -20.8844545, 55.44508450000001],

    ["Le Brûlé‎ <br> <img src='../images/le-brule.jpg' class='resize' alt=''>  <br> <a href='le-brule.html' type='button' class='btn btn-info'>voir son site dédié</a>", -20.9212428, 55.43885460000001],

    ["Bellepierre <br> <img src='../images/bellepierre.jpg' class='resize' alt=''>  <br> <a href='bellepierre.html' type='button' class='btn btn-info'>voir son site dédié</a>", -20.895689, 55.44700599999999],

    ["Barachois <br> <img src='../images/barachois.jpg' class='resize' alt=''>  <br> <a href='barachois.html' type='button' class='btn btn-info'>voir son site dédié</a>", -20.8726961, 55.448891900000035],

    ["Centre ville <br> <img src='../images/centreville.jpg' class='resize' alt=''>  <br> <a href='centre-ville.html' type='button' class='btn btn-info'>voir son site dédié</a>'", -20.8906596,  55.45505359999993],

  ];

  var stdenis = {
    lat: -20.8906596,
    lng: 55.45505359999993
  };
  var infowindow = new google.maps.InfoWindow();
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: stdenis 
  });

  function placeMarker(loc) {
    var latLng = new google.maps.LatLng(loc[1], loc[2]);
    var marker = new google.maps.Marker({
      position: latLng,
      map: map,
      icon: '../../site-stdenis/icon-map/m-rouge.png' 
    });

    google.maps.event.addListener(marker, 'click', function () {
      infowindow.close(); // Close previously opened infowindow
      infowindow.setContent("<div id='infowindow'>" + loc[0] + "</div>");
      infowindow.open(map, marker);
    });

  }

  for (var i = 0; i < locations.length; i++) {
    placeMarker(locations[i]);
  }

  // icon perso

  /*function addMarker(feature) {
    var marker = new google.maps.Marker({
      position: feature.position,
      icon: icons[feature.type].icon,
      map: map
    });
  }*/
}

