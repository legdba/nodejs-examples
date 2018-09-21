'use strict';

var Primus = require('primus');
var socket = new Primus.createSocket();
var primus = socket('http://localhost:8080/primus');

primus.on('data', function message(data) {
  console.log('Received a new message from the server', data);
  primus.write(data); // echo
});
primus.on('open', function open() {
  console.log('Connection is alive and kicking');
});
primus.on('error', function error(err) {
  console.error('Something horrible has happened', err.stack);
});
primus.on('reconnect', function (opts) {
  console.log('Reconnection attempt started');
});
primus.on('reconnect scheduled', function (opts) {
  console.log('Reconnecting in %d ms', opts.scheduled);
  console.log('This is attempt %d out of %d', opts.attempt, opts.retries);
});
primus.on('reconnected', function (opts) {
  console.log('It took %d ms to reconnect', opts.duration);
});
primus.on('reconnect timeout', function (err, opts) {
  console.log('Timeout expired: %s', err.message);
});
primus.on('reconnect failed', function (err, opts) {
  console.log('The reconnection failed: %s', err.message);
});
primus.on('end', function () {
  console.log('Connection closed');
});
primus.write({'message': 'hello world'});
