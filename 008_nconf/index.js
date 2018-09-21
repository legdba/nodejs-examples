if(require.main === module) {
  var conf = require('rc')('foo', {
    'answer': 42
  });

  console.log(conf);
}
