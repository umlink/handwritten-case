/**
 * 插入排序--时间复杂度 n^2
 * 在插入排序中，当待排序数组是有序时，是最优的情况，只需当前数跟前一个数比较一下就可以了，这时一共需要比较N- 1次，时间复杂度为O(n)

最坏的情况是待排序数组是逆序的，此时需要比较次数最多，总次数记为：1+2+3+…+N-1，所以，插入排序最坏情况下的时间复杂度为O(n^2)

通过上面了解，可以看到插入排序是一种稳定的排序方式
*/

const insertSort = (arr) => {
  const len = arr.length
  for (let i = 1; i < len; i++) {
    const preIndex = i - 1
    current = arr[i]
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex+1] = arr[preIndex];
      preIndex--
    }
    arr[preIndex + 1] = current;
  }
}

const _insertSort = (arr) => {
  let len = arr.length
  for (let i = 1; i < len; i++) {
    const preIndex = i - 1
    let current = arr[i]
    while (arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex]
      current = arr[preIndex]
      preIndex--
    }
    // 替换
    arr[preIndex + 1] = current
  }
}