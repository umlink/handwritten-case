const NewFunction = () => {
  const [constructor, ...arg] = [...arguments]
  //----------------
  const obj = Object.create(null)
  obj.__proto__ = constructor.prototype
  // 上述两步相当于 const obj = Object.create(constructor.prototype)
  const ret = constructor.apply(obj, arg)
  // return typeof ret === 'object' ? ret || obj : obj;
  let flag = ret && (typeof ret === "object" || typeof ret === "function");
  // 判断返回结果
  return flag ? ret : obj;
}