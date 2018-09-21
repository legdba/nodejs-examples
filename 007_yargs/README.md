This example shows how to have an application that reads the same configuration from command line and ENV and returns a plain old JSON file. Config files could be supported by using rc.

Node-config module is NOT used to read config because
1. it generates non-JSON config which is then a nightmare to share with legacy pieve of code and create too much dependency for new pieces of code anyway
2. it does have a constructor to create test config

Node that yargs while very powerful and versatile has one shortcoming. Options with a '-' or '.' using in conjunction with .strict() cause argv validation failure.

Get help:
```shell
./index.js --help
```

Read the `answer` from a CLI argument:
```shell
./index.js --answer=111
```

Read the `answer` from ENV:
```shell
FOO_ANSWER=666 ./index.js
```

Read the `answer` from a JSON file
```shell
./index.js --cfg-json ./config.json
```

Read the `answer` from a YAML file
```shell
./index.js --cfg-yaml ./config.yaml
```

Mix it all together
```shell
FOO_QUESTION="wtf?" ./index.js --mood thrilled --cfg-yaml ./config.yaml

NOTE: for some reason the index.js takes about 1.5-2s to complete. That should
be faster. Weird.
