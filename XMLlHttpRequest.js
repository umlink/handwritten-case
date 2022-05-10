const request = (params = {
  method: 'GET',
  url: '',
  headers: {
    "Content-Type": "application/json"
  }
}) => {
  return new  Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open(params.method, params.url, false)
    for (let key in params.headers) {
      xhr.setRequestHeader(key, params.headers[key])
    }
    xhr.onreadystatechange = function () {
      /**
       * 0: 未 open
       * 1: open
       * 2：send
       * 3: loading
       * 4: done
      */
      if (xhr.readyState !== 4) return;
      if (xhr.status === 200) { // 304 ...
        resolve(xhr.responseText)
      } else {
        reject(new Error(xhr.responseText))
      }
    }
  })
}