/**
 * 调到字符串
*/

const str = 'abcdef'

String.prototype.reversalStr = (str) => {
  return str.split('').reverse().join('')
}

console.log(str.reversalStr(str))