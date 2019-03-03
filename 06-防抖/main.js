function now() {
  console.log(new Date().toLocaleTimeString())
  return +new Date()
}

// 返回一个 wait = 50ms 和 立即执行的 防抖函数
function debounce(func, wait, immediate = true) {
  let timer, context, args
  const later = () =>
    setTimeout(() => {
      timer = null
      if (!immediate) {
        func.apply(this, arg)
        context = args = null
      }
    }, wait)

  return function(...params) {
    if (!timer) {
      timer = later() // 这里被我们忘记了
      if (immediate) {
        func.apply(this, params)
      } else {
        context = this
        args = params
      }
    } else {
      debugger
      console.log(timer)
      clearTimeout(timer)
      timer = later()
    }
  }
}
var nowD = debounce(now, 1000)

nowD()

let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    nowD()
    resolve(123)
  }, 2000)
}).then((value) => {
  setTimeout(() => {
    console.log(value)
    nowD()
  }, 2000)
})
