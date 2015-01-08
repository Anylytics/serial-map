// First we have to configure RequireJS
require.config({
    // This tells RequireJS where to find Ractive and rvc
    paths: {
        ractive: 'lib/ractive',
        rv: 'loaders/rv',
        mapbox: 'lib/mapbox'
    }
});

// Now we've configured RequireJS, we can load our dependencies and start
require([ 'ractive', 'rv!../ractive/map' ], function ( Ractive, mapTemplate ) {

    var mapRactive = new Ractive({
      // The `el` option can be a node, an ID, or a CSS selector.
      el: 'map',

      // We could pass in a string, but for the sake of convenience
      // we're passing the ID of the <script> tag above.
      template: mapTemplate,

      // Here, we're passing in some initial data
      data: { }
    });

});

require(['mapbox', "serial"]);