/**
 * 柯里化: 柯里化要求函数具有固定数量的参数。
 * 柯里化（Currying）是一种关于函数的高阶技术。它不仅被用于 JavaScript，还被用于其他编程语言。
 * 柯里化是一种函数的转换，它是指将一个函数从可调用的 f(a, b, c) 转换为可调用的 f(a)(b)(c)。
 * 柯里化不会调用函数。它只是对函数进行转换。
 * 
 * 核心：参数够了则直接执行，参数不够返回一个函数继续收集参数
 * 
*/

const curry = (func) => {
  return function curried (...args) {
    /**
     * func.length 函数参数个数
     * args.length >= func.length 说明参数组装完毕或者出事参数个数就是全的
     * args.length < func.length 累加 args 的过程
     * */ 
    if (args.length >= func.length) {
      return func.apply(this, args) 
    } else {
      return function (...args2) {
        return curried.apply(this, [...args, ...args2])
      }
    }
  }
}

const sum = (a, b, c) => {
  return a + b + c;
}

const curriedSum = curry(sum)

console.log(curriedSum(1, 2, 3))
console.log(curriedSum(1)(2, 3))
console.log(curriedSum(1)(2)(3))
console.log(curriedSum(1)(2)(3))