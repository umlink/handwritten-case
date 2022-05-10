const lengthOfLongestSubstring = str => {
  if (!str) return 0
  let maxLen = 0
  let singleStr = '' // 当前非重复字符传
  let subIndex = 0 // 当前字符位置
  const strLen = str.length
  while (subIndex < str.length) {
    const tempStr = str.substring(subIndex, strLen)
    for (let s of tempStr) {
      if (singleStr.indexOf(s) === -1) {
        singleStr += s
        maxLen = singleStr.length > maxLen ? singleStr.length : maxLen
      } else {
        // 游标加1 跳出当前循环
        subIndex++
        singleStr = ''
        break
      }
    }
  }
  return maxLen
}

console.log(lengthOfLongestSubstring('null'))


const func = (str) => {
  // 最大长度
  let maxLen = 0
  // 当前最大字串
  let maxSubStr = ''
  // 当前位置
  let currentIndex = 0

  while (currentIndex < str.length) {
    const tempStr = str.substring(currentIndex, str.length)
    for (let s of tempStr) {
      if (!maxSubStr.includes(s)) {
        maxSubStr += s
        maxLen = maxSubStr.length > maxLen ? maxSubStr.length : maxLen
      } else {
        // 游标加1 跳出当前循环
        maxSubStr = ''
        currentIndex++
        break
      }
    }
  }
  return maxLen
}


/**
 * 最大长度 maxLen
 * 当前累加字符串 maxStr
*/

const noRepeatStr = (str) => {
  let maxLen = 0
  let maxStr = ''
  let currentMaxStr = ''
  let currentIndex = 0
  const strLen = str.length
  while (currentIndex < strLen) {
    const tempStr = str.substr(currentIndex, strLen)
    console.log('------------', currentIndex, tempStr)
    for (let i = 0; i < tempStr.length; i++) {
      // console.log('----------s:', tempStr[i])
      if (currentMaxStr.indexOf(tempStr[i]) === -1) {
        currentMaxStr += tempStr[i]
        maxStr = maxStr.length > currentMaxStr.length ? maxStr : currentMaxStr
        maxLen = Math.max(currentMaxStr.length, maxLen)
        if (i === tempStr.length - 1) currentIndex++; break // 优化最后一个
      } else {
        tempMaxStr = ''
        currentIndex++;
        break
      }
    }
  }
  return maxStr
}

console.log(noRepeatStr('abcdefefg'))