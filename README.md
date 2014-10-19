# LED Device for BeagleBone Bonescript

This is a LED device for use in the Zetta platform on Beaglebone

##Install

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

### Hardware

* [Beagle Bone](http://beagleboard.org/black)

###Transitions

#####turn-on

No arguments. Turns on the led continuously.

#####turn-on-pulse

No arguments. Alternately turn the led on for 150 ms then off for 100ms.

#####turn-on-alternating

No arguments. Alternately turns on the led for 100 ms then off for 400ms.

#####turn-off

No arguments. Turns off the beeping.

#####flash

No arguments. Flashes the led once.
