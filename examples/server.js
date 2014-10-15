var zetta = require('zetta');
var LED = require('../led');

zetta()
  .use(LED, 'USR0')
  .listen(1337, function(){
    console.log('Zetta is running at http://beaglebone.local:1337');
  });
