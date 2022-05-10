const arr1 = [[1, 3, 5, 7], [2, 4, 6, 8]]

/**
 * 归并排序
*/

const sortList = (left, right) => {
  const result = []
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  return  result.concat(left, right)
}

const mergeList =  (arr) => {
  if (arr.length === 1) return list
  while (arr.length > 1) {
    const left = arr.shift()
    const right = arr.shift()
    arr.push(sortList(left, right))
  }
  return arr[0]
}

console.log(mergeList(arr1))