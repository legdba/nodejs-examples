RC is a rather simple and versatile config lib.

It reads from CLI args, ENV and files, returning a plain old Json object.
The CLI part while very efficient is pretty basic as there is no help, not verification and no type binding. If more is required rc can get yargs inputs directly.
