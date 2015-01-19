require([ 'ractive', 'rv!../ractive/uibuttons', "jquery", "jqueryui"], function ( Ractive, template, jquery, jquerymin) {

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


         $( ".draggable" ).draggable({ cursor: "move", axis: "x",
                stop: function(event, ui) {
                    if ($(this).position().left>0) {
                        //alert("return");
                        $($(this)).animate({"left": "0px"}, 400);
                    } else if ($(this).position().left<-2600) {
                        //alert("return");
                        $($(this)).animate({"left": "-2600px"}, 400);
                    }
                }
            });


});