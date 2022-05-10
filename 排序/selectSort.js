/**
 * 时间复杂度：n^2
 * 
*/

const selectSort = (arr) => {
  const len = arr.length
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] > arr[j]) {
        [arr[j], arr[i]] = [arr[i], arr[j]]
      }
    }
  }
  return arr
}

const arr = [1, 3, 6, 4, 10, 3, 20, 7]

console.log(selectSort(arr))