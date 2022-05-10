const getType = (val) => {
  if (val === null) return 'null'
  if (typeof val === 'object') {
    let type = Object.prototype.toString.call(val)
    type = type.split(' ')[1].split('')
    type.pop()
    type = type.join('').toLowerCase()
    console.log(type)
    return type
  }
  console.log(typeof val)
  return typeof val
}
getType({})
getType(undefined)
getType(null)
getType(2)
getType('2')