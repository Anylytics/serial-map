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
        hourNames: [ '0','...','7','8','9','10','11','12','13', '14', '15', '16', '17', '18','19','20','21','22','23','24'],
        date: "13/01/99",
        selectedStories: [0, 1, 2],
        storyOptions: ["Calls", "Adnan's Story", "Nothing"],
        selectedHour: -100,
        percentage: function ( minutes ) {
            return (minutes/60.0 * 100) - 5;
        },
        isselected: function ( hour, selectedHour ) {
            if (hour == selectedHour) {
                return true;
            }
            return false;
        },
        time: function ( hour ) {
            if (hour == "...")
                return "..."
            if (hour>=12){
                if (hour != 12){
                    hour=hour-12;
                }
                return hour + "PM";
            } else {
                if (hour == 0)
                    hour = 12;
                return hour + "AM";
            }
        }
      },
    });
    var adnanStory = story_d[1]["13/01/99"];
    var tempCalls = story_d[0]["13/01/99"];
    var nothing = story_d[2]["13/01/99"];

    timelineRactive.set({
        stories: [tempCalls, adnanStory, nothing]
    });

    timelineRactive.on( 'activate', function( event, hourName )  {
        var stories = timelineRactive.get("stories");
        var story0 = stories[0][hourName] == undefined ? [] : stories[0][hourName];
        var story1 = stories[1][hourName] == undefined ? [] : stories[1][hourName];
        var story2 = stories[2][hourName] == undefined ? [] : stories[2][hourName];

        var output = story0;
        if (story1 != story0)
        {
            output = output.concat(story1);
        }
        if (story2 != story1 && story2 != story0)
        {
            output = output.concat(story2);
        }


        output.sort(compare);
        sidebarRactive.set("stories", output);
        timelineRactive.set("selectedHour", hourName);
    });

    timelineRactive.observe('selectedStories', function(newValue, oldValue, keypath) {
        var story1 = story_d[newValue[0]]["13/01/99"];
        var story2 = story_d[newValue[1]]["13/01/99"];
        var story3 = story_d[newValue[2]]["13/01/99"];
        timelineRactive.set({
            stories: [story1,story2,story3]
        });
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
