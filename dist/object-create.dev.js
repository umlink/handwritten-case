"use strict";

Object.prototype.create = function (obj) {
  var attribute = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

  if (attribute === null) {
    throw '属性不能为null';
  } else {
    var Fn = function Fn() {};

    var tempObj = new Fn();
    tempObj.prototype = obj;

    if (attribute) {
      Object.defineProperties(tempObj, attribute);
    }

    if (obj === null) obj.__proto__ = null;
    return tempObj;
  }
};