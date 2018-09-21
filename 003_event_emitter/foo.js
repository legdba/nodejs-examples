'use strict';

var events = require('events');

module.exports = function(i) {
  return new Foo(i);
};

function Foo(i) {
  this._i = i;
};

Foo.prototype.constructor = Foo;

Foo.prototype.answer = function() {
  this.emit('answer', this._i);
};

Foo.prototype.__proto__ = events.EventEmitter.prototype;
