const add = (...args) => {
  let allArgs = args
  const sum = function (...args2) {
    allArgs = [...allArgs, ...args2]
    return sum
  }
  sum.sumOf = () => {
    return allArgs.reduce((a, b) => a + b)
  }
  return sum
}

console.log(add(1)(2)(3).sumOf())