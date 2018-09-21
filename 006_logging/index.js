'use strict';

var lugg = require('lugg');
lugg.init({level: 'debug'});
var log  = lugg('myapp');

// Rule 1: use parameterised strings for anything but error
//         it helps with performance as the toString() cost
//         will be paied only if the message is to be displayed
log.debug('This is the right way to interpolate strings in debug/info/warn messages: %s', 'some string');
log.debug('This is the WRONG way to interpolate strings in debug/info/warn messages: ' + 'it consumes too much RAM/CPU');
var msg = 'it also consumes too much RAM/CPU';
log.debug(`This is the also WRONG way to interpolate strings in debug/info/warn messages: ${msg}`);
log.info('info message');
log.warn('warn message');

// Rule 2: For error if you got an exception simply pass it as it is.
//         For errors always include the err 1st while calling log.error()
var err = new Error('some exception with a nice stacktrace');
log.error(err);
//         Alternatively a message could be added as a second param, make sure
//         to do that only if it adds meaningfull information
log.error(err, 'something went wrong: <error explanation here> (the stacktrace is for troubleshooting)');
//         And if no exception exists simply pass the error message alone
log.error('something went wrong and: <error explanation here> (no need for s stacktrace, the error is obvious)');
// Rule 3: The error message shall be a single param as not string
//         is performed with log.error (as opposed to othre log level).
msg = 'it would not be for debug/info/warn';
log.error(`This is he right way to interpolate strings in error logs: ${msg}`);
// Rule 4: don't repeath yourself. The 'err' is passed as a 1st param, don't do
//         log.error(err, 'error message: ' + err);
//         as it it more CPU/RAM intensive, just repeat the same message in the logs
//         and will display a VERY weird message is 'err' is not an exception (something it should be anyway).
log.error(err, 'This is _usualy_ wrong (should not repeat the error both in message and stack trace): ' + err);
