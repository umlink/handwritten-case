"use strict";

/**
 * 二分查找--时间复杂度 log2(n)
 * 
*/
var binarySearch = function binarySearch(arr, val) {
  var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var end = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : arr.length - 1;
  var targetIndex = -1;
  var mid = Math.floor((start + end) / 2);

  if (arr[mid] === val) {
    targetIndex = mid;
    return targetIndex;
  }

  if (start >= end) {
    return targetIndex;
  }

  if (arr[mid] < val) {
    return binarySearch(arr, val, mid + 1, end);
  } else {
    return binarySearch(arr, val, start, mid - 1);
  }
};

var dataArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var position = binarySearch(dataArr, 6);
console.log(position);