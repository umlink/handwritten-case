/**
 * 安顺序校验
*/

const funA = (callback) => {
  console.log('a')
  callback()
}
const funB = (callback) => {
  setTimeout(() => {
    console.log('b')
    callback()
  }, 2000)
}
const funC = (callback) => {
  setTimeout(() => {
    console.log('c')
    callback()
  }, 1000)
}

const verifyList = [funA, funB, funC]


const startCheck = function () {
  const iterator = verifyList[Symbol.iterator]()
  const execCheck = () => {
    const { value: execItem, done } = iterator.next()
      if (done) return console.log('按顺序校验完毕。。。')
      execItem(execCheck)
  }
  execCheck()
}
startCheck()