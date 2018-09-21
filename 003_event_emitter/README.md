The ```EventEmitter``` is a major feature of NodeJS.
But the documentation assumes extending from it as a class, which is not practical at all.

That example instead uses regular factory function "class" with embedding the EventEmitter prototype.
