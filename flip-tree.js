const node = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4
    },
    right: {
      value: 5
    }
  },
  right: {
    value: 3,
    left: {
      value: 6
    },
    right: {
      value: 7
    }
  }
}

/**
 * 翻转二叉树
*/

const filp = (node) => {
  const temp = node.left
  node.left = node.right
  node.right = temp
  node.left && filp(node.left)
  node.right && filp(node.right)
}
filp(node)

console.log(node)