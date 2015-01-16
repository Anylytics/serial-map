// Now we've configured RequireJS, we can load our dependencies and start
define([ 'ractive', 'rv!../ractive/sidebar', 'serial'], function ( Ractive, template, mapdictionary) {

    var siebarRactive = new Ractive({
      el: 'rightPanel',
      template: template,
      data: {

      },
    });

});
