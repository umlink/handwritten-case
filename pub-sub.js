// 发布订阅
class EventEmitter {
  constructor () {
    this.events = {}
  }
  on (type, callback) {
    if (this.events[type]) {
      this.events[type].push(callback)
      return
    }
    this.events[type] = [callback]
  }
  off (type, callback) {
    if (!this.events[type]) return
    this.events[type] = this.events[type].filter(item => item !== callback)
  }
  once (type, callback) {
    const tempFunc = () => {
      callback()
      this.off(type, tempFunc)
    }
    this.on(type, tempFunc)
  }
  emit (type, ...val) {
    this.events[type] && this.events[type].forEach(fn => fn.apply(this, val))
  }
}