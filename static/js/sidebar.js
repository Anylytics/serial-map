// Now we've configured RequireJS, we can load our dependencies and start
define([ 'ractive', 'rv!../ractive/sidebar', 'serial'], function ( Ractive, template, mapdictionary) {

    var sidebarRactive = new Ractive({
      el: 'rightPanel',
      template: template,
      data: {
        prev: undefined,
        test: '_a'
      },
    });

    sidebarRactive.observe( 'stories', function ( newValue, oldValue, keypath ) {
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
        prev = sidebarRactive.get('prev');
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
                iconUrl: '/static/img/'+prop.icon+test+'.gif',
                iconSize: [75, 75],
                iconAnchor: [37, 75],
                popupAnchor: [0, -35]
            }));
            sidebarRactive.set('prev', locale);
            if (test == '_a'){
                test = '_b';
            }
            else{
                test = '_a';
            }
            sidebarRactive.set('test', test);
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