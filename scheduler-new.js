/**
 * js实现一个带并发限制的异步调度器Scheduler，保证同时运行的任务最多maxNum个
 * 此方法为阻塞法
 * 
*/
class Scheduler {
  constructor (maxNum) {
    this.maxNum = maxNum
    this.lockList = []
    this.count = 0
  }
  addLock () {
    return new Promise((resolve) => {
      this.lockList.push(resolve)
    })
  }
  async add (promiseCreator) {
    if (this.count >= this.maxNum) {
      await this.addLock()
    }
    this.count++
    let res = await promiseCreator()
    this.count--
    if (this.lockList.length) {
      this.lockList.shift()()
    }
    return res
  }
}

const timeout = (time) => new Promise(resolve => {
  setTimeout(resolve, time)
})
const scheduler = new Scheduler(2);
const addTask = (time, val) => {
  scheduler.add(() => {
    return timeout(time).then(() => {
      console.log(val)
    })
  })
}
addTask(1000, '1');
addTask(500, '2');
addTask(300, '3');
addTask(400, '4');