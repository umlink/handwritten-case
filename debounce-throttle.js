/**
 * 防抖 只执行一次
*/

const _debounce = (fn, delay = 200) => {
  let timer = null
  return function (...arg) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arg)
    }, delay)
  }
}

/**
 * 节流，限制频繁执行，按固定频率执行
*/

const _throttle = (fn, delay = 200) => {
  let start = false
  return function (...arg) {
    if (start) return
    start = true
    setTimeout(() => {
      fn.apply(this, arg)
      start = false
    }, delay)
  }
}