```
npm install
# ignore the warning
npm start
```
Logs JSON to STDOUT as any good application should do.

For human readable logs simply pipe it with bunyan CLI
```
alias bunyan="$(pwd)/node_modules/bunyan/bin/bunyan"
npm start | bunyan
```

Real systems would have it installed globally obviously ;)

