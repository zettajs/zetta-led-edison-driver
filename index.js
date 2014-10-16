var Scout = require('zetta-scout');
var util = require('util');
var LED = require('./led');
var pins = [];

var LEDScout = module.exports = function() {
  pins =  arguments;
  Scout.call(this);
}
util.inherits(LEDScout, Scout);

LEDScout.prototype.init = function(next) {
  var self = this;
  for(var i = 0; i < pins.length; i++) {
    console.log(pins[i]);
    self.discover(LED, pins[i]);
  }
  next();
};
