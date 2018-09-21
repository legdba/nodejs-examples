'use strict';
const Foo = require('./foo');
var   foo = Foo(42)
foo.once('answer', function(answer) {
  console.log('the answer is %s', answer);
})
foo.answer();
