// Now we've configured RequireJS, we can load our dependencies and start
require([ 'ractive', 'rv!../ractive/timeline', 'storydata', 'serial', 'sidebar'], function ( Ractive, template, story_d, mapdictionary, sidebarRactive) {

    function compare(a,b) {
      if (a.minute < b.minute)
         return -1;
      if (a.minute > b.minute)
        return 1;
      return 0;
    }

    var timelineRactive = new Ractive({
      el: 'timelineContainer',
      template: template,
      data: {
        hourNames: [ '13', '14', '15', '16', '17', '18','19','20','21','22','23','24'],
        date: "13/01/99",
        percentage: function ( minutes ) {
            return minutes/60.0 * 100;
        }
      },
    });
    var adnanStory = story_d[1]["13/01/99"];
    var tempCalls = story_d[0]["13/01/99"];
    var nothing = {};
    var stories = [tempCalls, adnanStory, nothing]

    timelineRactive.set({
        stories: stories
    })

    timelineRactive.on( 'activate', function( event, hourName )  {
        var story0 = stories[0][hourName] == undefined ? [] : stories[0][hourName];
        var story1 = stories[1][hourName] == undefined ? [] : stories[1][hourName];
        var output = story0.concat(story1);
        output.sort(compare);
        sidebarRactive.set("stories", output);
    });
    /*
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
                iconUrl: '/static/img/cellActive.png',
                iconSize: [21.5, 32.5],
                iconAnchor: [0, 0],
                popupAnchor: [0, 0]
            }));
        }
    });
    */


});
