/**
 * 快速排序（Quick Sort）算法是在冒泡排序的基础上进行改进的一种算法，从名字上看就知道该排序算法的特点是快、效率高，是处理大数据最快的排序算法之一
 * 实现的基本思想是：通过一次排序将整个无序表分成相互独立的两部分，其中一部分中的数据都比另一部分中包含的数据的值小
 * 
*/

const quickSort = (arr) => {
  const sort = arr => {
    if (arr.length <= 1) return arr
    const left = []
    const right = []
    const mid = arr[0]
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < mid) {
        left.push(arr[i])
      } else {
        right.push(arr[i])
      }
    }
    return [...sort(left), mid, ...sort(right)]
  }
  return sort(arr)
}

const arr = [1, 3, 6, 4, 10, 3, 20, 7]

console.log(quickSort(arr))