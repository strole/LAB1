

navigator.geolocation.getCurrentPosition(success,error,options);

function success(pos){
    var crd=pos.coords;

    var listLoc =[
        {latitude: crd.latitude, longitude: crd.longitude, title:'userName'}
    ]
    
    document.getElementById('lat').textContent=crd.latitude;
    document.getElementById('lon').textContent=crd.longitude;
    document.getElementById('name').textContent=listLoc[0].title;
    let mapOptions={
        center:[crd.latitude, crd.longitude],
        zoom:8
        };

    let map = new L.map('map',mapOptions);
    let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
    map.addLayer(layer);

    for(let i=0;i<listLoc.length;i++){
    let marker = new L.Marker([listLoc[i].latitude, listLoc[i].longitude],{title: listLoc[i].title});
    marker.addTo(map).bindPopup(listLoc[i].title).openPopup();
    }
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
