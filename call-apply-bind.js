/**
 * ctx 默认为 window 的原因是函数 call、apply、bind 第一个参数为空是 指向window
 */
Function.prototype.myCall = (ctx = window, ...args) => {
  // 创造唯一的key值  作为我们构造的context内部方法名
  const fn = Symbol()
  ctx[fn] = this // 此时 this 指向了调用者
  const ret = ctx[fn](...args)
  delete ctx[fn]
  return ret
}

/**
 * apply 第二个入参为 数组
 */
Function.prototype.myApplu = (ctx = window, args) => {
  const fn = Symbol()
  ctx[fn] = this
  const ret = ctx[fn](...args)
  delete ctx[fn]
  return ret
}
/**
 * 返回函数
 * 返回函数可传参
 * 当返回的绑定函数被new运算符调用的时候，绑定的上下文指向new运算符创建的对象
 */
Function.prototype.myBind = (ctx = window, ...arg) => {

  if (typeof this !== 'function') {
    throw new TypeError('被绑定的对象需要是函数')
  }
  // 创造唯一的key值  作为我们构造的context内部方法名
  let fn = Symbol();
  ctx[fn] = this;
  let _this = this;
  //  bind情况要复杂一点
  const result = function (...innerArgs) {
    // 第一种情况 :若是将 bind 绑定之后的函数当作构造函数，通过 new 操作符使用，则不绑定传入的 this，而是将 this 指向实例化出来的对象
    // 此时由于new操作符作用  this指向result实例对象  而result又继承自传入的_this 根据原型链知识可得出以下结论
    // this.__proto__ === result.prototype   //this instanceof result =>true
    // this.__proto__.__proto__ === result.prototype.__proto__ === _this.prototype; //this instanceof _this =>true
    if (this instanceof _this) {
      // 此时this指向指向result的实例  这时候不需要改变this指向
      this[fn] = _this;
      return this[fn](...[...args, ...innerArgs]); //这里使用es6的方法让bind支持参数合并
    } else {
      // 如果只是作为普通函数调用  那就很简单了 直接改变this指向为传入的ctx
      return ctx[fn](...[...args, ...innerArgs]);
    }
  };
  // 如果绑定的是构造函数 那么需要继承构造函数原型属性和方法
  // 实现继承的方式: 使用Object.create
  result.prototype = Object.create(this.prototype);
  
  return result;
}

Function.protoType.mockBind = function (context = window, ...initArgs) {
	const foo = this
	var bindFoo = function (...args) {
		if(this instanceof bindFoo){
      return new foo(...initArgs, ...args)
    }
		return foo.call(context, ...initArgs, ...args)
	}
	return bindFoo
}