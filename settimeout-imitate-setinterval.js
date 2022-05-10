// setTimeout 模拟 setInterval

const newSetTimeout = (fn, time) => {
  let timer = null
  const intreval = () => {
    fn()
    timer = setTimeout(intreval, time);
  }
  intreval()
  
  const cancel = () => {
    clearTimeout(timer)
  }
  return cancel
}