/**
 * 输出前n个斐波那契数
 * 
*/

const fibonacci = (n) => {
  const recursive = (n) => {
    return n < 2 ? 1 : recursive(n - 1) + recursive(n - 2)
  }
  let i = 0
  while (i < n) {
    console.log(recursive(i))
    i++
  }
}

// fibonacci(10)

/**
 * 尾递归优化
*/
function fibonacci1 (n, prev, next){
  if(n <= 1) return next
  return fibonacci(n - 1, next, prev + next)
}
// fibonacci(10)

//---------------------------------------实现斐波那契数列


// 优化
function fibonacci2(n) {
  const arr = [1, 1, 2];
  const arrLen = arr.length;

  if (n <= arrLen) {
      return arr[n];
  }

  for (let i = arrLen; i < n; i++) {
      arr.push(arr[i - 1] + arr[ i - 2]);
  }

  return arr[arr.length - 1];
}



const outputFb = (n) => {
  if (n === 1 || n === 2) return 1
  let prev = 1
  let next = 1
  let indexCounter = 0
  while (indexCounter <= n) {
    if (indexCounter < 2) {
      console.log(1)
    } else {
      const current = prev + next
      console.log(current)
      prev = next
      next = current
    }
    indexCounter++
  }
}

outputFb(10)
