'use strict';
var Foo = require('./foo');
var foo = Foo(42)
console.log('the answer is %s', foo.answer());
console.log('trying to access private member _i: %s', foo._i); // return 42 => breaks encapsulation
