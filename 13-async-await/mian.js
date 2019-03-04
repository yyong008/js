function sleep() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('finish')
      resolve("sleep")
    }, 2000)
  })
}

async function test() {
  let value = await sleep()
  console.log('object')
}
test()