var Device = require('zetta-device');
var util = require('util');
var bone = require('bonescript');

var LED = module.exports = function(pin) {
  Device.call(this);
  this.pin = pin;
};
util.inherits(LED, Device);

LED.prototype.init = function(config) {
  config
    .type('led')
    .name('led ' + this.pin)
    .state('off')
    .when('off', { allow: ['turn-on', 'turn-on-pulse', 'turn-on-alternating', 'flash']})
    .when('on', { allow: ['turn-off', 'turn-on-pulse', 'turn-on-alternating', 'flash'] })
    .when('pulse', { allow: ['turn-off', 'turn-on', 'turn-on-alternating', 'flash'] })
    .when('alternating', { allow: ['turn-off', 'turn-on', 'turn-on-pulse', 'flash'] })
    .when('flash', { allow: [] })
    .map('flash', this.flash)
    .map('turn-on', this.turnOn)
    .map('turn-on-pulse', this.turnOnPulse)
    .map('turn-on-alternating', this.turnOnAlternating)
    .map('turn-off', this.turnOff);
    
  //Everything is off to start
  bone.pinMode(this.pin, bone.OUTPUT);
  bone.digitalWrite(this.pin, 0);
};

LED.prototype.turnOn = function(cb) {
  var state = 'on';
  var onDuration = 500;
  var offDuration = 0;
  this._tone(onDuration, offDuration, state, cb);
};

LED.prototype.turnOnPulse = function(cb) {
  var state = 'pulse';
  var onDuration = 150;
  var offDuration = 100;
  this._tone(onDuration, offDuration, state, cb);
};

LED.prototype.turnOnAlternating = function(cb) {
  var state = 'alternating';
  var onDuration = 100;
  var offDuration = 400;
  this._tone(onDuration, offDuration, state, cb);
};

LED.prototype.flash = function(cb) {
  this.state = 'flash';
  var self = this;
  this.turnOff(function() {
    self._emit(100, 750); 
  });
  cb();
};


LED.prototype.turnOff = function(cb) {  
  if (this._timer != undefined) {
    clearInterval(this._timer);
  }
  var self = this;
  bone.digitalWrite(this.pin, 0, function() {
    self.state = 'off';
    cb();
  });
};


LED.prototype._tone = function(onDuration, offDuration, state, cb) {
  var self = this;
  this.turnOff(function(){
    self._timer = setInterval(self._emit.bind(self, onDuration), onDuration + offDuration);
    self.state = state;
    cb();
  });
};

LED.prototype._emit = function(delay) {
  var self = this;
  
  bone.digitalWrite(this.pin, 1, function() {
    setTimeout(function() {
      bone.digitalWrite(self.pin, 1);
    }, delay);
  });

};


