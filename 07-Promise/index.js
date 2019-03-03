new Promise((resolve, reject) => {
  console.log("flag")
  setTimeout(() => {
    console.log("定时器到时时间了，我们要打印一个日志")
    resolve("回调函数的参数")
  }, 1000)
}).then((value) => {
  console.log("resolve函数的回调函数里面能通过参数得到value")
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("第二个promise")
      resolve(value)
    }, 1000)
  })
}).then((value) => {
  console.log(value)
})