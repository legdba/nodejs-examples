'use strict';

module.exports = function(i) {
  return new Foo(i);
};

function Foo(i) {
  this._i = i;
};

Foo.prototype.constructor = Foo;

Foo.prototype.answer = function() {
  return this._i;
};
