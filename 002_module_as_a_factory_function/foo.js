'use strict';

module.exports = function Foo(i) {
  return {
    answer: function() {
      return i;
    }
  };
};
