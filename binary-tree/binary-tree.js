// const binary = [3, 9, 20, 11, 6, 15, 7]
const binary = []

/**
 * 按层级返回
 * 完全二叉树
 * 出发点：数据索引所以 -1
 * root = i
 * left = 2i
 * right: 2i + 1
*/

const getTierList = (arr) => {
  if (!arr || !Array.isArray(arr) || !arr.length) return []
  const root = arr[0]
  const list = [[root]]
  const recursive = (root, level, list) => {
    // root 索引
    if (!root) return
    let rootIndex = arr.indexOf(root) + 1
    const leftNode = arr[2 * rootIndex - 1]
    const rightNode = arr[2 * rootIndex + 1 - 1]
    // 当前层暂时为空
    if (!list[level]) {
      const lt = []
      leftNode && lt.push(leftNode)
      rightNode && lt.push(rightNode)
      lt.length && (list[level] = lt)
    } else {
      leftNode && list[level].push(leftNode)
      rightNode && list[level].push(rightNode)
    }
    recursive(leftNode, level + 1, list)
    recursive(rightNode, level + 1, list)
  }
  recursive(root, 1, list)
  return list
}

const zTree = (arr) => {
  if (!arr || !Array.isArray(arr) || !arr.length) return []
  const root = arr[0]
  const list = [[root]]
  const recursive = (root, level, list) => {
    // root 索引
    if (!root) return
    let rootIndex = arr.indexOf(root)
    rootIndex = rootIndex + 1
    const isOdd = (level + 1) % 2 === 0
    let leftNode = arr[2 * rootIndex - 1]
    let rightNode = arr[2 * rootIndex + 1 - 1]
    if (isOdd) {
      [leftNode, rightNode] = [rightNode, leftNode]
    }
    // 当前层暂时为空
    if (!list[level]) {
      const lt = []
      leftNode && lt.push(leftNode)
      rightNode && lt.push(rightNode)
      lt.length && (list[level] = lt)
    } else {
      leftNode && list[level].push(leftNode)
      rightNode && list[level].push(rightNode)
    }
    recursive(rightNode, level + 1, list)
    recursive(leftNode, level + 1, list)
  }
  recursive(root, 1, list)
  return list
}

console.log(zTree(binary))