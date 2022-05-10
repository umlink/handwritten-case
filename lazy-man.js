/**
实现一个LazyMan，可以按照以下方式调用:
LazyMan(“Hank”)输出:
Hi! This is Hank!

LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
Hi! This is Hank!
//等待10秒..
Wake up after 10
Eat dinner~

LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
Hi This is Hank!
Eat dinner~
Eat supper~

LazyMan(“Hank”).eat(“supper”).sleepFirst(5)输出
//等待5秒
Wake up after 5
Hi This is Hank!
Eat supper
 * 
*/

class lazyMan {
  constructor (name) {
    this.tasks = []
    const task = () => {
      console.log(`Hi! This is ${name}`);
      this.next()
    }
    this.tasks.push(task);
    setTimeout(() => {
      // 把 this.next() 放到调用栈清空之后执行
      this.next();
    }, 0);

  }
  next () {
    const task = this.tasks.shift(); // 取第一个任务执行
    task && task();
  }
  sleep (time) {
    this._sleepWaper(time)
    return this
  }
  sleepFirst (time) {
    this._sleepWrapper(time, true);
    return this;
  }
  _sleepWaper (time, isFirst = false) {
    const task = () => {
      setTimeout(() => {
        console.log(`Wake up after ${time}`);
        this.next()
      }, time * 1000)
    }
    if (isFirst) {
      this.tasks.unshift(task)
    } else {
      this.tasks.push(task)
    }
  }
  eat (food) {
    const task = () => {
      console.log(`Eat ${food}`);
      this.next();
    };
    this.tasks.push(task);
    return this;
  }
}
new lazyMan('Jack').sleep(2).eat('苹果')