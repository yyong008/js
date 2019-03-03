const debounce = (func, wait = 40) => {
  let timer = 0

  return function (...args) {
    if (timer) clearTimeout(timer)
    var timer = setTimeout(() => {
      func.apply(this, args)
    }, wait)
  }
}