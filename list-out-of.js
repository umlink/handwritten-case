/**
 * 数组乱序
 * 
*/

const arr = [1,2,3,4,5,6,7,8,9,10];

const randomList = (arr) => {
  const len = arr.length
  for (let i = 0; i < len; i++) {
    const randomIndex = Math.round(Math.random() * (arr.length - 1 - i)) + i;
    [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]]
  }
}

const randomList2 = () => {
  arr.sort(() => Math.random() - 0.5)
}

randomList2(arr)
console.log(arr)