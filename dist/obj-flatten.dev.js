"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var obj = {
  a: {
    b: 1,
    c: 2,
    d: {
      e: 5
    }
  },
  b: [1, 3, {
    a: 2,
    b: 3
  }],
  c: 3
};

function isObject(val) {
  return _typeof(val) === "object" && val !== null;
}

var flatten = function flatten(obj) {
  if (!isObject(obj)) return;
  var res = {};

  var traverse = function traverse(cur, prefix) {
    if (isObject(cur)) {
      if (Array.isArray(cur)) {
        cur.forEach(function (item, index) {
          return traverse(item, "".concat(prefix, "[").concat(index, "]"));
        });
      } else {
        for (var key in cur) {
          traverse(cur[key], "".concat(prefix ? prefix + '.' : '').concat(key));
        }
      }
    } else {
      res[prefix] = cur;
    }
  };

  traverse(obj, '');
  return res;
};

console.log(flatten(obj));