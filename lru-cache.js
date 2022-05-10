/**
 * 缓存机制
 * get put
*/

class LRUCache {
  constructor (max) {
    this.max = max
    this.cache = new Map()
  }
  put (key, val) {
    this.cache.set(key, val)
    if (this.cache.size > this.max) {
      // 获取第一个key this.cache.keys() 返回键名的遍历器,所以需要手动 next() 返回 { value: 1, done: false }
      const firstKey = this.cache.keys().next().value
      this.cache.delete(firstKey)
    }
  }
  get (key) {
    const value = this.cache.get(key)
    value && this.cache.delete(key)
    return value || -1
  }
  
  keys () {
    return this.cache.keys()
  }
}

let cache = new LRUCache(2)

cache.put(1, 1)
cache.put(2, 2);
cache.put(3, 3);

console.log(cache.get(2))