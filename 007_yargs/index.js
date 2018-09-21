#!/usr/bin/env node
if(require.main === module) {
  var argv = require('yargs')
    .usage('Usage: $0 [option..]')
    .example('$0 --the-answer=42')
    .epilog('copyright 2017')
    .showHelpOnFail(true, 'Specify --help for available options')
    .help('h')
    .alias('h', 'help')
    // Define arguments for CLI
    .option('answer', {
      describe: 'the answer (to what question???)',
      type: 'number',
      choices: [0, 42, 111, 666]
    })
    .option('question', {
      describe: 'the question',
      type: 'string'
    })
    .option('mood', {
      describe: 'your current mood',
      type: 'string'
    })
    .config('cfg-json', '*.json configuration file')
    .config('cfg-yaml', '*.yaml configuration file', function(configPath) {
      return require('js-yaml').safeLoad(require('fs').readFileSync(configPath, 'utf-8'));
    })
    // Parse any --cfg value as a JSON document with config
    //.coerce('cfg', JSON.parse)
    // Read any FOO_xxx env variable as arcument xxx
    .env('FOO')
    .strict()
    .argv;
  console.log(argv);
}
