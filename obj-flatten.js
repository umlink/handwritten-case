const obj = {
  a: {
         b: 1,
         c: 2,
         d: {e: 5}
     },
  b: [1, 3, {a: 2, b: 3}],
  c: 3
 }

 function isObject(val) {
  return typeof val === "object" && val !== null;
}


 const flatten = (obj) => {
   if (!isObject(obj)) return
   const res = {}
   
   const traverse = (cur, prefix = '') => {
    if (isObject(cur)) {
      if (Array.isArray(cur)) {
        cur.forEach((item, index) => traverse(item, `${prefix}[${index}]`))
      } else {
        for (let key in cur) {
          traverse(cur[key], `${prefix ? prefix + '.' : ''}${key}`)
        }
      }
    } else {
      res[prefix] = cur
    }
   }

   traverse(obj)

   return res
 }

 console.log(flatten(obj))