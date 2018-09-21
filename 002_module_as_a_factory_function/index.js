'use strict';
const Foo = require('./foo');
var   foo = Foo(42)
console.log('the answer is %s', foo.answer());
