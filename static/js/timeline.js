// Now we've configured RequireJS, we can load our dependencies and start
require([ 'ractive', 'rv!../ractive/timeline', 'calldata'], function ( Ractive, template, call_d) {

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


});
