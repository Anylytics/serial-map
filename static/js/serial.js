
define(
    [
        "mapbox",
        "towerdata"
    ],
    function(mapbox, geojson)
{
console.log("STARTING");
L.mapbox.accessToken = 'pk.eyJ1IjoiZ3VpbHR5c3BhcmsiLCJhIjoiNkNReWgtMCJ9.-fHLc9ig1AQz7ta9oE6vzg';
var map = L.mapbox.map('map', 'guiltyspark.kl48ij2n', {
zoomControl: true })
.setView([39.292222,-76.686667], 13);

///DEFINE RACTIVE////
var mapDictionary = {}
mapDictionary["map"] = map;
///DONEE////


var locations = L.mapbox.featureLayer().addTo(map);
locations.setGeoJSON(geojson);
//var listings = document.getElementById('listings');
locations.eachLayer(function(locale) {
  // Shorten locale.feature.properties to just `prop` so we're not
  // writing this long form over and over again.
  var prop = locale.feature.properties;

  //Add each tower to the map dictionary
  mapDictionary[prop.name] = locale;

  //var listing = listings.appendChild(document.createElement('div'));
  //listing.className = 'item';

  //var link = listing.appendChild(document.createElement('a'));
  //link.href = '#';
  //link.className = 'title';
  //link.innerHTML = prop.name;

  //var details = listing.appendChild(document.createElement('div'));
  //details.innerHTML = prop.city;

  /*link.onclick = function() {
      // 1. Toggle an active class for `listing`. View the source in the demo link for example.

      // 2. When a menu item is clicked, animate the map to center
      // its associated locale and open its popup.
      //map.setView(locale.getLatLng(), 14);
      locale.openPopup();
  };*/
  locale.on('click', function() {
      // 1. Toggle an active class for `listing`. View the source in the demo link for example.

      // 2. center the map on the selected marker.
      //map.setView(locale.getLatLng(), 14);
      /*locale.setIcon(L.icon({
        iconUrl: '/static/img/'+prop.icon+'_a.gif',
        iconSize: [75, 75],
        iconAnchor: [37, 75],
        popupAnchor: [0, 0]
      }));*/
  });
  var popup =  prop.title;
  locale.bindPopup(popup);
  locale.setIcon(L.icon({
    iconUrl: '/static/img/'+prop.icon+'_t.png',
    iconSize: [75, 75],
    iconAnchor: [37, 73],
    popupAnchor: [0, -35]
  }));
});

// Disable drag and zoom handlers.
/*map.dragging.disable();
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();*/

// Disable tap handler, if present.
if (map.tap)
{
  //map.tap.disable();
}

return mapDictionary;
});
