/*
请实现抽奖函数rand，保证随机性
输入为表示对象数组，对象有属性n表示人名，w表示权重
随机返回一个中奖人名，中奖概率和w成正比
*/
let peoples = [
  { n: 'p1', w: 100 },
  { n: 'p2', w: 200 },
  { n: 'p3', w: 300 },
  { n: 'p4', w: 100 },
]
let rand = function (p) {
  const tW = 100 // 一共一百份
  const total = p.reduce((prev, curr) => {
     return prev + curr.w
  }, 0)
  const unit = tW / total // 每份 0.25
  const limit = 0.01
  const rdNum = Math.random()
  let ret = null
  p.forEach((item, index) => {
    const startScope = index === 0 ? 0 : p[index - 1].scope[1] + limit
    const endScope = startScope + ((item.w / tW) * unit - limit)
    if (rdNum >= startScope && rdNum <= endScope) {
      ret = item
    }
    item.scope = [startScope, endScope]
  })
  return ret.n
}
console.log(rand(peoples))