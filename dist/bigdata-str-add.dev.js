"use strict";

var a = "9007199254740991";
var b = "1234567899999999999";

var add = function add(a, b) {
  var maxLen = Math.max(a.length, b.length);
  a = a.padStart(maxLen, 0);
  b = b.padStart(maxLen, 0);
  var f = 0;
  var sum = '';

  for (var i = maxLen - 1; i >= 0; i--) {
    var t = Number(a[i]) + Number(b[i]) + f;
    f = Math.floor(t / 10);
    sum = '' + t % 10 + sum;
  }

  console.log(sum);

  if (f) {
    sum = '' + f + sum;
  }

  return sum;
};

var sub = function sub(a, b) {
  var maxLen = Math.max(a.length, b.length);
  a = a.padStart(maxLen, 0);
  b = b.padStart(maxLen, 0);
  var f = 0;
  var subStr = '';

  for (var i = maxLen - 1; i >= 0; i--) {
    var t = Number(a[i]) - Number(b[i]) - f;
    f = t < 0 ? 1 : 0;
    subStr = '' + (f === 1 ? 10 + t : t) + subStr;
  }

  if (f === 1) {
    subStr = '-' + subStr;
  }

  return subStr;
};

console.log(sub(a, b));