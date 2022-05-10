/**
 * leftVaule = leftVaule.__proto__ 
 * leftVaule.__proto__.__proto__
 * leftVaule.__proto__.__proto__.__proto__
 * 一直往上游查询
 * 首先获取类型的原型
 * 然后获得对象的原型
 * 然后一直循环判断对象的原型是否等于类型的原型，直到对象原型为 null，因为原型链最终为 null
*/

Function.prototype.myInstanceof = (leftVaule, rightVaule) => {
  while (leftVaule !== null) {
    if (leftVaule.__proto__ === rightVaule.prototype) {
        return true;	
    }
    leftVaule = leftVaule.__proto__ 
  }
  return false
}