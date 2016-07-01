var fs = require('fs');

casper.on('remote.message', function(message) {
  this.echo(message);
});

casper.test.begin('Map Handler E2E tests', function(test) {
  casper.start('');

  casper.page.viewportSize = {
    width: 1280,
    height: 900
  };

  casper.thenOpen('http://localhost:8080');
  casper.then(function() {
    casper.waitForSelector('link[href="https://api.mapbox.com/mapbox.js/v2.4.0/mapbox.css"]', function pass() {
      casper.waitForSelector('script[src="https://api.mapbox.com/mapbox.js/v2.4.0/mapbox.js"]', function pass() {
        casper.waitForSelector('.leaflet-container', function pass() {
          test.assertVisible('.leaflet-container');
        });
      });
    });
  });

  casper.run(function() {
    setTimeout(function() {
      casper.page.render('screen/render.png');
      test.done();
    });
  });
});
