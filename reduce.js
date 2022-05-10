/**
 *  prev curr currIndex arr 
 * 
*/
Array.prototype.myReduce = function (callback, defaultPrev) {

  if (!this || !Array.isArray(this)) throw Error('...')
  if (typeof callback !== 'function') throw Error('...')

  const arr = this
  let prev = defaultPrev || arr[0]
  let currentIndex = defaultPrev ? 0 : 1

  while (currentIndex < arr.length) {
    prev = callback(prev, arr[currentIndex], currentIndex, arr)
    currentIndex++
  }
  
  return prev
}

const arr = [1, 2, 3, 4, 5]

console.log(arr.myReduce((a, b) => a + b))