'use strict';

const Foo = require('./foo');

var tryAnswer = function tryAnswer(i) {
  var foo = Foo(i);
  foo.answer().then(function(answer) {
    console.log('the answer is %s', answer);
  })
  .catch(Error, function(err){
    console.error('Error exception: %s', err);
  })
  .catch(function(err) {
    console.error('unknown error: %s', err);
  });
}

// Lets check some answers out
tryAnswer(42);
tryAnswer(24);
tryAnswer(-1);

console.log();

// Now lets chain...
var foo = Foo(42);
foo.answer().then(function(answer) {
  console.log('the answer is %s', answer);
})
.then(function() {
  return foo.question();
})
.then(function(question) {
  console.log('the question is: %s', question);
})
.catch(Error, function(err){
  console.error('Error exception: %s', err);
})
.catch(function(err) {
  console.error('unknown error: %s', err);
});

// Note: the outputs above are NOT printed in the same
// order as in the code. This depends on the execution order.
