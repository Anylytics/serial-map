// Now we've configured RequireJS, we can load our dependencies and start
require([ 'ractive', 'rv!../ractive/temperatures', 'tempdata' ], function ( Ractive, template, data ) {

var linearScale, getPointsArray, resize, cities, ractive;

// this returns a function that scales a value from a given domain
// to a given range. Hat-tip to D3
linearScale = function ( domain, range ) {
  var d0 = domain[0], r0 = range[0], multipler = ( range[1] - r0 ) / ( domain[1] - d0 );

  return function ( num ) {
    return r0 + ( ( num - d0 ) * multipler );
  };
};

// this function takes an array of values, and returns an array of
// points plotted according to the given x scale and y scale
getPointsArray = function ( array, xScale, yScale, point ) {
  var result = array.map( function ( month, i ) {
    return xScale( i + 0.5 ) + ',' + yScale( month[ point ] );
  });

  // add the december value in front of january, and the january value after
  // december, to show the cyclicality
  result.unshift( xScale( -0.5 ) + ',' + yScale( array[ array.length - 1 ][ point ] ) );
  result.push( xScale( array.length + 0.5 ) + ',' + yScale( array[0][ point ] ) );

  return result;
};

var tempRactive = new Ractive({
  el: 'timeline',
  template: template,
  data: {
    format: function ( val ) {
      if ( this.get( 'degreeType' ) === 'fahrenheit' ) {
        // convert celsius to fahrenheit
        val = ( val * 1.8 ) + 32;
      }

      return val.toFixed( 1 ) + '°';
    },

    // this function returns the SVG string for the polygon representing the
    // temperature band
    band: function ( months ) {
      var xScale, yScale, high = [], low = [];

      xScale = this.get( 'xScale' );
      yScale = this.get( 'yScale' );

      high = getPointsArray( months, xScale, yScale, 'high' );
      low = getPointsArray( months, xScale, yScale, 'low' );

      return high.concat( low.reverse() ).join( ' ' );
    },

    hourNames: [ '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm' ]
  }
});


// because we're using SVG, we need to manually redraw
// when the container resizes. You *can* use percentages
// instead of pixel/em lengths, but not in transforms
resize = function () {
  var width, height;


  width = tempRactive.nodes.svg_wrapper.clientWidth;
  height = tempRactive.nodes.svg_wrapper.clientHeight;

  tempRactive.set({
    width: width,
    height: height
  });
};

// recompute xScale and yScale when we need to
tempRactive.observe({
  width: function ( width ) {
    console.log("HERE "+width);
    this.set( 'xScale', linearScale([ 0, 12 ], [ 0, width ]) );
  },
  height: function ( height ) {
    this.set( 'yScale', linearScale([ -10, 42 ], [ height - 20, 25 ]) );
    this.set( 'yPlane', linearScale([ 0, 100 ], [height, 0]) );
  },
});

// update width and height when window resizes
window.addEventListener( 'resize', resize );
resize();


// respond to user input
tempRactive.observe( 'selected', function ( index ) {
  console.log(index);
  this.animate( 'selectedCity', data[ index ], {
    easing: 'easeOut',
    duration: 300
  });
});


// load our data
//reqwest({ url: 'assets/temperatures.json', type: 'json' }).then( function ( data ) {
  cities = data;

  tempRactive.set({
    cities: cities,
    selectedCity: cities[0] // initialise to London
  });
//});

});