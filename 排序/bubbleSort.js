/**
 * 时间复杂度：n^2
 * 
*/
const bubbleSort = (arr) => {
  const len = arr.length;
  let isSort = false // 若排序好则直接退出
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        isSort = true
      }
    }
    if (!isSort) break;
  }
  return arr
}
const arr = [1, 3, 6, 4, 10, 3, 20, 7]

console.log(bubbleSort(arr))