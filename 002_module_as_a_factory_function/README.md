Here the ```Foo``` 'class' is a factory function that returns an object with a built-in method.

Compared with example, there is no need for ```new``` (functions everywhere), no need for ```this``` and the associated potential confusion, but as no ```prototype``` is used the ```answer()``` function is inject into each instance of Foo rather than once in the prototype; this is less CPU/RAM efficient, but probably not even noticeable in most cases.

A factory function also enforces encapsulation as the variable i is simply not available.
