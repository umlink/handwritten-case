// 寄生组合继承
function Parent () {
  this.name = 'parent'
  this.say = () => {
    console.log('my name parent')
  }
}

Parent.prototype.play = () => {
  console.log(' to play ')
}

function Children () {
  Parent.call(this)
  this.name = 'children'
  this.say = () => {
    console.log('my name children')
  }
}

function Inherit (children, parent) {
  // 子类想在原型上添加方法
  children.prototype = Object.assign(Object.create(parent.prototype), children.prototype)
  children.constructor = children
}

