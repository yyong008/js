

function debounce(func, wait, immediate) {

  // later 延迟工具函数
  const later = () => setTimeout(() => {
    timer = null;
    if(!immediate) {
      func.apply(this, arg)
      context = args = null
    }
  } ,wait)

  return function (...params) {
    if(!timer) {
      timer = later()
      if(immediate) {
        func.apply(this. params)
      } else {
        context = this
        args = params
      }
    } else {
      clearTimeout(timer)
      timer=later()
    }
  }
}
