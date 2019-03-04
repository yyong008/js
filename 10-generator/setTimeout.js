function time() {
  setTimeout(() => {
    console.log(456)
    it.next(123)
    debugger
  }, 2000)
}
function* gen() {
  let timer = yield time()
  console.log(timer)
  // let timer2 = yield time()
  // console.log(timer2)
}
function test() {
  console.log('test')
}
let it = gen()
it.next()

// ---------------------
//   作者：chiuwingyan
// 来源：CSDN
// 原文：https://blog.csdn.net/chiuwingyan/article/details/80550101
// 版权声明：本文为博主原创文章，转载请附上博文链接！
