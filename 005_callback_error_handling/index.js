'use strict';

var doSomethingAsync = function doSomethingAsync(i, callback) {
  // Rule 1: always check callback is valid before anything else
  if(typeof callback !== 'function') throw new Error('invalid callback');

  // Rule 2: upon error callback with a standard exception, to have a stacktrace, NOT a string
  // Rule 3: return upon calling back, you don't want the risk to continue execution

  if (i < 0) return callback(new Error('test Error: the test passed if you see that error'));
  // Rule 4: upon success the err is set to null while calling back
  return callback (null, 'fake async processing succeeded');
}

var doSomethingMoreAsync = function doSomethingMoreAsync(j, callback) {
  if(typeof callback !== 'function') throw new Error('invalid callback');
  return doSomethingAsync(j, function(err, data) {
    if (err) {
      // If you can't handle the error, propogate it,
      // UNCHANGED (to keep the stacktrace):
      return callback(err);

      // DO NOT DO THIS (it will lose the error stack):
      // return callback(new Error('failed to do something more: ' + err));
      // NodeJS does not allow exception chaining (as Java does).
    }
    callback(null, data);
  });
};

var test = function test(i) {
  doSomethingMoreAsync(i, function(err, data) {
    // Rule 5: upon error do something and return; , you don't want the risk to continue execution
    if (err) return console.error(err.stack, err);
    console.log(data);
  });
};

test(0);
test(-1);
