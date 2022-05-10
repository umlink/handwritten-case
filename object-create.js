Object.prototype.create = (obj, attribute = undefined) => {
  if (attribute === null) {
    throw '属性不能为null'
  } else {
    const Fn = () => {}
    const tempObj = new Fn()
    tempObj.prototype = obj
    if (attribute) {
      Object.defineProperties(tempObj, attribute)
    }
    if (obj === null) obj.__proto__ = null
    return tempObj
  }
}



/***
 * 
 * const t = new Fn()
 * t.prototype = obj
 * if (!obj) t.__proto__ = null
 * return t
*/