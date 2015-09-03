'use strict';
module.exports = (function() {
  var key;
  var vault = {};

  var setValue = function(key,value) {
    vault[key] = value;
  };

  function getValue(key) {
    if (vault.hasOwnProperty(key)) {
      return vault[key];
    } else {
      return null;
    }
  }
  return {
    getValue : getValue,
    setValue : setValue
  };
});