const list = [
  {
      id: 1,
      text: '节点1',
      parentId: 0 //这里用0表示为顶级节点
  },
  {
      id: 2,
      text: '节点1_1',
      parentId: 1 //通过这个字段来确定子父级
  },
  {
    id: 3,
    text: '节点1_2',
    parentId: 1 //通过这个字段来确定子父级
  },
  {
    id: 4,
    text: '节点1_1_1',
    parentId: 2 //通过这个字段来确定子父级
  }
]

/**
 * 利用对象引用
 * 
*/
const listToTree = (list) => {
  const temp = {}
  const tree = []
  for (let i = 0; i < list.length; i++) {
    temp[list[i].id] =  list[i]
  }
  Object.keys(temp).forEach(id => {
    const item = temp[id]
    if (item.parentId === 0) {
      tree.push(temp[id])
    } else {
      if (!temp[item.parentId].children) {
        temp[item.parentId].children = []
      }
      temp[item.parentId].children.push(item)
    }
  })
  console.log(JSON.stringify(tree))
  return tree
}

listToTree(list)
