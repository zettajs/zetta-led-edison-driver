# LED Device for BeagleBone Bonescript

This is a LED device for use in the Zetta platform on Beaglebone

##Installation

`npm install zetta-led-bonescript-driver`

##Usage

To use simply call the `use()` function in your code to use this device.

```javascript
var zetta = require('zetta');
var LEDs = require('zetta-led-bonescript-driver');

zetta()
  .use(LEDs, 'USR0', 'USR1', 'USR2', 'USR3')
  .listen(1337, function(){
    console.log('Zetta is running at http://beaglebone.local:1337');
  });
```
