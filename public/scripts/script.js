
navigator.geolocation.getCurrentPosition(success,error,options);

allUsers = []

function success(pos){
    var crd=pos.coords;
    var d=new Date().toLocaleString();

    var listLoc =[
        {latitude: crd.latitude, longitude: crd.longitude, time:d}
    ]

    var x = document.getElementById("name").textContent;

    allUsers.push({latitude: crd.latitude, longitude: crd.longitude, name: x, time: d})
    console.log("Korisnici => ", allUsers)
    document.getElementById('lat').textContent = crd.latitude;
    document.getElementById('lon').textContent = crd.longitude;
    let mapOptions={
        center:[crd.latitude, crd.longitude],
        zoom:8
        };

    let map = new L.map('map',mapOptions);
    let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
    map.addLayer(layer);

    for(let i=0;i<allUsers.length;i++){
        let marker = new L.Marker([listLoc[i].latitude, listLoc[i].longitude],{title: listLoc[i].title});
        marker.addTo(map).bindPopup(x+'\n'+d).openPopup();
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
