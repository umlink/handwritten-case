// 数组拍平  也叫数组扁平化

// const flatter = (arr) => {
//   if (!arr.length) return 
//   return arr.reduce((pre, cur) => {
//     return Array.isArray(cur) ? [...pre, ...flatter(cur)] : [...pre, cur]
//   }, [])
// }

function flatter(arr) {
  if (!arr.length) return;
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
    console.log(arr)
  }
  return arr;
}

// console.log(flatter([1, 2, [1, [2, 3, [4, 5, [6]]]]]))

const _flat = (arr, dep = 1) => {
  if (!Array.isArray(arr) || dep <= 0) return arr
  return arr.reduce((prev, cur) => {
    if (Array.isArray(cur)) {
      console.log(prev.concat(_flat(cur, dep - 1)))
      return prev.concat(_flat(cur, dep - 1))
    } else {
      prev.push(cur)
     return prev
    }
  }, [])
}

const a = [1, [2, 3], [4, 5, [6, [7]]]]

console.log(_flat(a, 2))