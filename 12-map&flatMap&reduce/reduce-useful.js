function a() {
  debugger
  console.log(1)
}

function b() {
  console.log(2)
}

[a, b].reduce((total, cur) => {
  debugger
  total(cur())
})