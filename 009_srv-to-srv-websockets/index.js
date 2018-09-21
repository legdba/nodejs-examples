'use strict';

const util = require('util');
var Primus = require('primus');
var http = require('http');

var primus = Primus.createServer(
    function connection(spark) { },
    { port: 8080, transformer: 'websockets' }
  );

primus.on('connection', function connect(spark) {
  console.log('connected: %s', spark)

  spark.on('data', function message(data) {
    console.log('received data "%s" over connection %s', util.inspect(data, {showHidden: false, depth: null}), spark);
    spark.write(data); // echo
  });

  spark.on('end', function end(data) {
    console.log('received data "%s" over connection %s while closing spark', data, spark);
  });
})

primus.on('disconnection', function disconnect(spark) {
  // the spark that disconnected
  console.log('disconnected: %s', spark)
});
