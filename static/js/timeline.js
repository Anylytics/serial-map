// Now we've configured RequireJS, we can load our dependencies and start
require([ 'ractive', 'rv!../ractive/timeline', 'calldata', 'serial'], function ( Ractive, template, call_d, mapdictionary) {

    var timelineRactive = new Ractive({
      el: 'timelineContainer',
      template: template,
      data: {
        calls: call_d["13/01/99"],
        hourNames: [ '13', '14', '15', '16', '17', '18'],
        date: "13/01/99",
        percentage: function ( minutes ) {
            return minutes/60.0 * 100;
        }
      },
    });

    timelineRactive.on( 'activate', function( event, mapID ) {
        var id = mapID;
        if (mapID.slice(-1) == 'A' || mapID.slice(-1) == 'B' || mapID.slice(-1) == 'C' )
        {
            id = mapID.slice(0,-1);
        }
        for (var key in mapdictionary)
        {
            var locale = mapdictionary[key];
            locale.setIcon(L.icon({
                iconUrl: '/static/img/cellTower.png',
                iconSize: [21.5, 32.5],
                iconAnchor: [0, 0],
                popupAnchor: [0, 0]
            }));
        }
        if (id in mapdictionary)
        {
            var locale = mapdictionary[id];
            locale.setIcon(L.icon({
                iconUrl: '/static/img/cellactive.gif',
                iconSize: [21.5, 32.5],
                iconAnchor: [0, 0],
                popupAnchor: [0, 0]
            }));
        }
    });


});
