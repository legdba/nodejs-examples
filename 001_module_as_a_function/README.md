In Node everything in a file is private to that file. I.e. *things* in a file are only visible to other *things* in the same file.

When a module that exposes nothing is loaded, the ```require``` returns an empty object:
```javascript
var bar = require('empty.js');
// here bar is set to {}
```

In order for a module to expose something, that module shall use the ```module.exports```. ```module.exports``` is nothing more (or less) than the object returned by the ```require```keyword when loading a file. By default it is an empty object.

The ```module.exports``` can be redefined as a function (as a JS function is also an object), which transforms a module into a function.

For OOP programming this allows the neat following syntax with Foo behaving like a factory function and foo like an instance:
```javascript
var Foo = require('./foo');
var foo = Foo(42)
```

See ```index.js``` and ```foo.js``` for a working example.
