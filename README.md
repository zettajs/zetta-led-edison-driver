# LED Device for BeagleBone Bonescript

This is a LED device for use in the Zetta platform on Beaglebone

##Installation

`npm install zetta-led-bonescript-driver`

##Usage

To use simply call the `use()` function in your code to use this device.

```javascript
var zetta = require('zetta');
var LED = require('zetta-mock-led');

zetta()
  .use(LED)
  .listen(1337);
```
