"use strict";

var binary = [3, 9, 20, null, null, 15, 7];
/**
 * 按层级返回
 * 
*/

var getTierList = function getTierList(arr) {
  var root = arr[0];
  var list = [];
  list.push([root]); // layer 层级

  var recursive = function recursive(rt) {
    var layer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    var list = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    if (!rt) return;
    var index = arr.indexOf(rt) + 1;
    var left = arr[2 * index - 1];
    var right = arr[2 * index];
    console.log(rt, left, right);

    if (!list[layer]) {
      var tl = [];
      left && tl.push(left);
      right && tl.push(right);
      tl.length && (list[layer] = [tl]);
    } else {
      left && list[layer].push(left);
      right && list[layer].push(right);
    }

    recursive(left, layer + 1, list);
    recursive(right, layer + 1, list);
  };

  recursive(root, 0, list);
  return list;
};

console.log(getTierList(binary));