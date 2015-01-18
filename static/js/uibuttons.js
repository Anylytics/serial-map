require([ 'ractive', 'rv!../ractive/uibuttons', "jquery"], function ( Ractive, template) {

        $( "#legendButton" ).click(function() {
            if ($( "#legend" ).hasClass( "offScreen" )) {
                $( "#legend" ).removeClass("offScreen animated fadeOutLeft");
                $( "#legend" ).addClass("animated fadeInLeft");
            } else {
                $( "#legend" ).removeClass("animated fadeInLeft");
                $( "#legend" ).addClass("animated fadeOutLeft").delay(1000).addClass("offScreen");
            }
        });


        $( "#timeButton" ).click(function() {
            if ($( "#timelineContainer" ).hasClass( "offScreen" )) {
                $( "#timelineContainer" ).removeClass("offScreen animated fadeOutDown");
                $( "#timelineContainer" ).addClass("animated fadeInUp");
            } else {
                $( "#timelineContainer" ).removeClass("animated fadeInUp");
                $( "#timelineContainer" ).addClass("animated fadeOutDown").delay(1000).addClass("offScreen");
            }
        });

        $( "#storyButton" ).click(function() {
            if ($( "#rightPanel" ).hasClass( "offScreen" )) {
                $( "#rightPanel" ).removeClass("offScreen animated fadeOutRight");
                $( "#rightPanel" ).addClass("animated fadeInRight");
            } else {
                $( "#rightPanel" ).removeClass("animated fadeInRight");
                $( "#rightPanel" ).addClass("animated fadeOutRight").delay(1000).addClass("offScreen");
            }
        });
});