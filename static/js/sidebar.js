// Now we've configured RequireJS, we can load our dependencies and start
define([ 'ractive', 'rv!../ractive/sidebar', 'serial', 'jquery'], function ( Ractive, template, mapdictionary) {

    function clone(orig) {
        var latlng = {}
        latlng['lat'] = orig['lat']+ .001;
        latlng['lng'] = orig['lng'];
        return latlng;
    }

    var sidebarRactive = new Ractive({
      el: 'rightPanel',
      template: template,
      data: {
        prev: undefined,
        test: true,
        stories: undefined,
        welcome: true,
        time: function ( hour, minute ) {
            if (hour>12){
                hour=hour-12;
                return hour + ":"+ minute+ "pm";
            } else {
                return hour + ":" + minute + "am";
            }
        }
      },
    });

    sidebarRactive.observe( 'stories', function ( newValue, oldValue, keypath ) {
        if (newValue != undefined)
            sidebarRactive.set('welcome',false);
        if (oldValue != undefined)
        {
            for (var item in oldValue)
            {
                if (oldValue[item]["geo"] in mapdictionary)
                {
                    var locale = mapdictionary[oldValue[item]["geo"]];
                    var prop = locale.feature.properties;
                    locale.setIcon(L.icon({
                        iconUrl: '/static/img/'+prop.icon+'_t.png',
                        iconSize: [75, 75],
                        iconAnchor: [37, 75],
                        popupAnchor: [0, -35]
                    }));
                }
            }
        }
        for (var item in newValue)
        {
            if (newValue[item]["geo"] in mapdictionary)
            {
                var locale = mapdictionary[newValue[item]["geo"]];
                var prop = locale.feature.properties;
                locale.setIcon(L.icon({
                    iconUrl: '/static/img/'+prop.icon+'.png',
                    iconSize: [75, 75],
                    iconAnchor: [37, 75],
                    popupAnchor: [0, -35]
                }));
            }
        }

    });

    sidebarRactive.on( 'open_feature', function( event, feature_name )  {
        var prev = sidebarRactive.get('prev');
        if (prev != undefined)
        {
            var locale = prev;
            var prop = locale.feature.properties;
            locale.setIcon(L.icon({
                iconUrl: '/static/img/'+prop.icon+'.png',
                iconSize: [75, 75],
                iconAnchor: [37, 75],
                popupAnchor: [0, -35]
            }));
        }
        if (feature_name in mapdictionary)
        {
            var locale = mapdictionary[feature_name];
            var prop = locale.feature.properties;
            var test = sidebarRactive.get('test');
            locale.setIcon(L.icon({
                iconUrl: '/static/img/'+prop.icon+'_a.gif',
                iconSize: [75, 75],
                iconAnchor: [37, 75],
                popupAnchor: [0, -35]
            }));

            if (prev == locale)
            {
                if (test){
                    mapdictionary["map"].setView(clone(locale.getLatLng()), 14);
                    sidebarRactive.set('test', false);
                }
                else
                {
                    mapdictionary["map"].setView(locale.getLatLng(), 14);
                    sidebarRactive.set('test', true);
                }

            }
            else
            {
                mapdictionary["map"].setView(locale.getLatLng(), 14);
                sidebarRactive.set('test', true);
            }



            sidebarRactive.set('prev', locale);
        }

    });



    return sidebarRactive;


});
/*
for (var key in mapdictionary)
        {
            var locale = mapdictionary[key];
            var prop = locale.feature.properties;
            locale.setIcon(L.icon({
                iconUrl: '/static/img/'+prop.icon+'.png',
                iconSize: [75, 75],
                iconAnchor: [37, 75],
                popupAnchor: [0, 0]
            }));
        }*/