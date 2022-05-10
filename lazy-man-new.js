class LazyMan {
  constructor (name) {
    this.taskList = []
    const task = () => {
      console.log('my name is: ', name)
      this.next()
    }
    this.taskList.push(task)
    setTimeout(() => this.next())
  }
  next () {
    const task = this.taskList.shift()
    task && task()
    return this
  }
  eat (name) {
    const task = () => {
      console.log('eat：', name)
      this.next()
    }
    this.taskList.push(task)
    return this
  }
  sleep (time) {
    const task = () => {
      console.log('sleep start: ', time)
      setTimeout(() => {
        console.log('sleep end: ', time)
        this.next()
      }, time)
    }
    this.taskList.push(task)
    return this
  }
  firstSleep (time, isFirst) {
    const task = () => {
      console.log('sleep start: ', time)
      setTimeout(() => {
        console.log('sleep end: ', time)
        this.next()
      }, time)
    }
    this.taskList.unshift(task)
    return this
  }
}

new LazyMan('Jack').sleep(2000).eat('苹果').firstSleep(3000)