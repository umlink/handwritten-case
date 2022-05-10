
new Promise((resolve, reject) => {
  resolve('test')
}).then(val => {
  console.log('origin: ', val)
})

const PENDING = 'PENDING';
const FULFILLED = 'FULFILLED';
const REJECTED = 'REJECTED';

class MyPromise {
  constructor (fn) {
    this.state = PENDING
    this.successFun = []
    this.failFun = []

    const resolve = (val) => {
      if (this.state !== PENDING) return
      this.state = FULFILLED
      setTimeout(() => {
        this.successFun.forEach(fn => fn.call(this, val))
      }, 0)
    }

    const reject = (val) => {
      if (this.state !== PENDING) return
      this.state = REJECTED
      setTimeout(() => {
        this.failFun.forEach(fn => fn.call(this, val))
      }, 0)
    }
    try {
      fn(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }

  then (resolveCallback, rejectCallback) {
    resolveCallback = typeof resolveCallback !== "function" ? (v) => v : resolveCallback;
    rejectCallback = typeof rejectCallback !== "function" ? (err) => { throw err } : rejectCallback;
    return new MyPromise((resolve, reject) => {
      this.successFun.push((val) => {
        try {
          // 执行回调函数
          let p = resolveCallback(val);
          //（最难的一点）
          // 如果回调函数结果是普通值 那么就resolve出去给下一个then链式调用 
          // 如果是一个promise对象（代表又是一个异步） 那么调用p的then方法
          // 将resolve和reject传进去 等到p内部的异步 执行完毕的时候（状态完成)
          // 就会自动执行传入的resolve 这样就控制了链式调用的顺序
          p instanceof MyPromise ? p.then(resolve, reject) : resolve(p);
        } catch (error) {
          reject(error);
        }
      });
      this.failFun.push((val) => {
        try {
          // 执行回调函数
          let p = rejectCallback(val);
          p instanceof MyPromise ? p.then(resolve, reject) : reject(val);
        } catch (error) {
          reject(error);
        }
      });
    })
  }

  static resolve (data) {
    return new MyPromise((resolve) => {
      resolve(data)
    })
  }

  static reject (err) {
    return new MyPromise((resolve, reject) => {
      reject(err)
    })
  }

  static all (promiseAll) {
    const result = []
    let count = 0
    return new MyPromise((resolve, reject) => {
      for (let i = 0; i < promiseAll.length; i++) {
        Promise.resolve(promiseAll[i]).then(res => {
          result[i] = res
          count++
          if (count === promiseAll.length) resolve(result)
        }, err => {
          reject(err)
        })
      }
    })
  }

  static race (promiseArr) {
    return new Mypromise((resolve, reject) => {
      for (let i = 0; i < promiseArr.length; i++) {
        Promise.resolve(promiseArr[i]).then(
          (res) => {
            //promise数组只要有任何一个promise 状态变更  就可以返回
            resolve(res);
          },
          (err) => {
            reject(err);
          }
        );
      }
    });
  }

  catch (errCallback) {
    return this.then(null, errCallback)
  }

  finally (callback) {
    return this.then(res => {
      return MyPromise.resolve(callback()).then(() => res)
    }, err => {
      return MyPromise.reject(callback()).then(() => { throw err })
    })
  }

}