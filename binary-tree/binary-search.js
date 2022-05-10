/**
 * 二分查找--时间复杂度 log2(n)
 * 
*/

const binarySearch = (arr, val, start = 0, end = arr.length - 1) => {
  let targetIndex = -1
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === val) {
    targetIndex = mid
    return targetIndex
  }
  if (start >= end) {
    return targetIndex
  }
  if (arr[mid] < val) {
    return binarySearch(arr, val, mid + 1, end)
  } else {
    return binarySearch(arr, val, start, mid - 1)
  }
}
const dataArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 
const position = binarySearch(dataArr, 6)

console.log(position)