var Device = require('zetta-device');
var util = require('util');
var bone = require('bonescript');

var LED = module.exports = function(pin) {
  Device.call(this);
  this.pin = pin || "USR0";
};
util.inherits(LED, Device);

LED.prototype.init = function(config) {
  config
    .type('led')
    .state('off')
    .when('off', { allow: ['turn-on'] })
    .when('on', { allow: ['turn-off'] })
    .map('turn-on', this.turnOn)
    .map('turn-off', this.turnOff);
    
  //Everything is off to start
  bone.pinMode(this.pin, bone.OUTPUT);
  bone.digitalWrite(this.pin, 0);
};

LED.prototype.turnOn = function(cb) {
  var self = this;
  bone.digitalWrite(this.pin, 1, function() {
    self.state = 'on';
    cb();
  });
};

LED.prototype.turnOff = function(cb) {
  var self = this;
  bone.digitalWrite(this.pin, 0, function() {
    self.state = 'off';
    cb();
  });
};
