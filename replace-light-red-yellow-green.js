function red() {
  console.log('red');
}

function green() {
  console.log('green');
}

function yellow() {
  console.log('yellow');
}


const task = (time, minTask) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      minTask()
      resolve()
    }, time)
  })
}

const step = () => task(3000, red).then(() => task(1000, green)).then(() => task(2000, yellow)).then(step)

step()

/**
 * 
 *  await task(3000, 'red')
    await task(2000, 'green')
    await task(2100, 'yellow')
 * 
 * 
*/