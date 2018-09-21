'use strict';

module.exports = function Foo(i) {
  return {
    answer: function answer() {
      //return Promise.resolve(i);
      return new Promise(function(resolve, reject) {
        if (i === 42) resolve(i);
        else if (i < 0) reject(new Error("the answer can only be positive"));
        else throw new Error('42 is the only answer');
      });
    },
    question: function question() {
      return new Promise(function(resolve, reject) {
        if (i === 42) resolve('what was the question already?');
        else throw new Error('if you don\'t know the answer, how could you possibly know the question?');
      });
    }
  };
};
