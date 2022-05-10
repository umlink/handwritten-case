let url = 'http://www.domain.com/?user=anonymous&id=123.2&id=456&city=%E5%8C%97%E4%BA%AC&enabled';


const formatUrlToParams = (url) => {
  const params = /.+\?(.+)$/.exec(url)[1]
  const obj = {}
  const list = params.split('&')
  list.forEach(item => {
    if (item.includes('=')) {
      let [key, val] = item.split('=')
      val = decodeURIComponent(val); // 解码
      val = /\d+/.test(val) ? +val : val
      if (!obj[key]) {
        obj[key] = val
      } else {
        obj[key] = [].concat(obj[key], val)
      }
    } else {
      obj[item] = true
    }
  })
  return obj
}

console.log(formatUrlToParams(url))