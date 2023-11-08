// Creating the map object
var myMap = L.map("map", {
    center: [0,0],
    zoom: 2
  });
  
  // Adding the tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);
  
// Creating a GeoJSON layer with the retrieved data
L.geoJson(mapData, {
    style: (feature) =>{
        return {
            weight: 2,
            opacity: 1,
            color: 'green',
            fillOpacity: 0
        };
    },
    onEachFeature: function (feature,layer){
        let country = feature.properties.ADMIN;
        layer.bindPopup(`<h3>${country}</h3>`)
}}).addTo(myMap);

console.log(mapData)