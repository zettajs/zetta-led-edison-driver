var zetta = require('zetta');
var LEDs = require('../index');

zetta()
  .use(LEDs, 'USR0', 'USR1', 'USR2', 'USR3')
  .listen(1337, function(){
    console.log('Zetta is running at http://beaglebone.local:1337');
  });
