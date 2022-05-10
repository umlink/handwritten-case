let a = "9007199254740991";
let b = "1234567899999999999";

const add = (a, b) => {
  const maxLen = Math.max(a.length, b.length)
  a = a.padStart(maxLen, 0)
  b = b.padStart(maxLen, 0)
  let f = 0
  let sum = ''
  for (let i = maxLen - 1; i >=0; i--) {
    const t = Number(a[i]) + Number(b[i]) + f
    f = Math.floor(t / 10) // (t / 10) | 0
    sum = '' + t % 10 + sum
  }
  if (f) {
    sum = '' + f + sum
  }
  return sum
}

const sub = (a, b) => {
  const maxLen = Math.max(a.length, b.length)
  a = a.padStart(maxLen, 0)
  b = b.padStart(maxLen, 0)
  let f = 0
  let subStr = ''
  for (let i = maxLen - 1; i >=0; i--) {
    const t = Number(a[i]) - Number(b[i]) - f
    f = t < 0 ? 1 : 0
    subStr = '' + (f === 1 ? 10 + t : t) + subStr
  }
  if (f === 1) {
    subStr = '-' + subStr
  }
  return subStr
}

// console.log(sub(a, b))

const multiply = (a, b) => {
  const list = []
  let maxLen = 0
  let index = 0
  for (let i = a.length - 1; i >= 0; i--) {
    let f = 0
    s1 = +a[i]
    let str = ''
    for (let j = b.length - 1; j >= 0; j--) {
      s2 = +b[j]
      let val = s1 * s2 + f
      f = (val / 10) | 0
      str = `${val%10}${str}`
    }
    str = str.padEnd(str.length + index, 0)
    index++
    f = 0
    maxLen = str.length > maxLen ? str.length : maxLen
    list.push(str)
  }
  return list.reduce((a, b) => {
    return add(a, b)
  })
}

console.log(multiply(a, b))