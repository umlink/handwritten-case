const fullStr = (val) => {
  return val = +val > 10 ? val : `0${val}`
}

const formatTime = (dateTime, format) => {
  const year = dateTime.getFullYear()
  let month = fullStr(dateTime.getMonth() + 1)
  let day = fullStr(dateTime.getDate())
  return format.replace('YYYY', year).replace('MM', month).replace('DD', day)
}

console.log(formatTime(new Date(), 'YYYY/MM/DD'))