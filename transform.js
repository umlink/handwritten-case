const transform = (obj) => {
  obj.length = Object.keys(obj).length
  const arr = Array.from(obj)
  const tempObj = {}
  arr.forEach((item, index) => {
    const childs = item.department.split('-')
    childs.reduce((prev, curr) => {
      const path = prev ? `${prev}-${curr}` : curr
      if (!tempObj[path]) {
        tempObj[path] = {
          name: prev ? item.username : curr,
          path,
          parent: prev,
          children: []
        }
      }
      return path
    }, null)
  })
  const list = []
  Object.keys(tempObj).map(key => {
    const item = tempObj[key]
    if (!item.parent) {
      list.push(item)
    } else {
      tempObj[item.parent].children.push(item)
    }
  })
  console.log(list)
  return list
}

transform({
  0: {
    username: '0',
    department: 'A-B-C',
  },
  1: {
    username: '1',
    department: 'A-B-D',
  },
  2: {
    username: '2',
    department: 'A-X-Y',
  },
})