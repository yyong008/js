let two = '123'
function foo () {
  debugger
  let one = '123'
  let ob = {
    x: 1,
    y: 2
  }
  return function () {
    console.log(one)
    console.log(ob)
    console.log(Object.keys(this))
    console.log(Object.keys(global))
    debugger
  }
}

var bar = foo()
bar()
debugger
for (var i = 1; i <= 5; i++) {
  (function (j) {
    debugger
    setTimeout(function timer() {
      console.log(j);
      console.log(this)
    }, j * 1000);
  })(i);
}