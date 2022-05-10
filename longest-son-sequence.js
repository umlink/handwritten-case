/**
 * 最长递增子序列 - 个数
 * https://segmentfault.com/a/1190000039838442
 */

const nums = [10, 9, 2, 5, 3, 1, 7, 101, 18, 6]

/**
 * 动态规划取最长
 */
const getShotChildList = (nums) => {
  const numsLen = nums.length
  if (!numsLen) return 0
  const dep = Array.from(Array(nums.length), () => 1)
  for (let i = 1; i < numsLen; i++) {
    const current = nums[i]
    for (let j = 0; j < i; j++) {
      if (current > nums[j]) {
        dep[i] = Math.max(dep[i], dep[j] + 1)
      }
    }
  }
  return Math.max(...dep)
}

console.log(getShotChildList(nums))

/**
 * 贪心 + 二分查找
 */

const getShotChildList2 = (nums) => {
  const numsLen = nums.length
  if (!numsLen) return 0
  let result = [nums[0]];
  for (let i = 1; i < numsLen; i++) {
    const current = nums[i]
    if (current > result[result.length - 1]) {
      result.push(current)
    } else {
      let left = 0
      let right = result.length - 1
      while (left < right) {
        const mid = ((left + right) / 2) | 0
        if (result[mid] > current) {
          right = mid
        } else {
          left = mid + 1
        }
      }
      result[left] = current
    }
  }
  return result.length
}

// console.log(getShotChildList2(nums))


/**
 * Vue3最长递增子序列源码【找的是索引】
 * 动态规划 + 贪心算法 + 二分查找 + 回溯结合
 * ret: 存储下表
*/

function getSequence(arr) {
  const arrLen = arr.length
  // 复制数据
  const p = arr.slice()
  const ret = [0] // 标定第一个结果下表是 0 开始

  for (let i = 1; i < arrLen; i++) {
    const current = arr[i]
    const lastRet = ret[ret.length - 1]
    // 当前值为增加的直接添加进去即可
    if (current > arr[lastRet]) {
      p[i] = lastRet // 当前 i 对应的前一个索引 既 result 最后一个值
      ret.push(i)
      continue
    }
    // 二分查找 找到第一个大于 current 的索引 既不断更新 left 的过程
    let left = 0
    let right = ret.length - 1
    while (left < right) {
      const mid = (( left + right) / 2) | 0
      if (current < arr[ret[mid]]) {
        right = mid
      } else {
        left = mid + 1
      }
    }
    // 值的比对
    const firstMaxIndex = ret[left]
    if (current < arr[firstMaxIndex]) {
      if (left > 0) {
        p[i] = ret[left - 1] // p[n] 永远存储的是 arr[n] 对应数值所在 result 索引的前一个索引
      }
      ret[left] = i
    }
  }
  console.log(ret)
  // 开始根据 p 中保存的索引进行回溯,从最后一个索引值开始在p中逐个向前回溯
  let t = ret.length
  let retCurrentIndex = ret[t - 1]
  while (t-- > 0) {
    ret[t] = retCurrentIndex
    retCurrentIndex = p[retCurrentIndex]
  }
  return ret
}


console.log(getSequence(nums))