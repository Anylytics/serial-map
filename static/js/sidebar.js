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
        selectedStory: undefined,
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
        sidebarRactive.set('selectedStory', undefined);
        if (newValue != undefined && newValue.length >0)
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
            sidebarRactive.set('prev', undefined);
        }
        var avglatlng = { "lat": 0, "lng": 0};
        var counter = 0;
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
                var latlng = locale.getLatLng();
                avglatlng["lat"] += latlng["lat"];
                avglatlng["lng"] += latlng["lng"];
                counter++;
            }
        }
        if (avglatlng["lat"] != 0 && avglatlng["lng"] != 0)
        {
            avglatlng["lat"] /= counter;
            avglatlng["lng"] /= counter;
            mapdictionary["map"].panTo(avglatlng);

            sidebarRactive.set('test', true);
        }

    });

    sidebarRactive.on( 'open_feature', function( event, feature_name, index )  {
        sidebarRactive.set('selectedStory', index);
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
                    mapdictionary["map"].panTo( clone(locale.getLatLng()) );
                    sidebarRactive.set('test', false);
                }
                else
                {
                    mapdictionary["map"].panTo( locale.getLatLng() );
                    sidebarRactive.set('test', true);
                }

            }
            else
            {
                mapdictionary["map"].panTo( locale.getLatLng() );
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