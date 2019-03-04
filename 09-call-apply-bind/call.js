Function.prototype.myApply = function (context) {
  var context = context || window
  context.fn = this

  var result
  // 需要判断是否存储第二个参数
  // 如果存在，就将第二个参数展开
  if (arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }

  delete context.fn
  return result
}

function Foo(name, age) {
  this.name = name
  this.age = age
  this.say = function () {
    console.log('you are handlesome' + 'your age is ' + this.age)
  }
}

var one = {
  name: 'yyong',
  age: 26
}
var two = {
  a: 'yyong',
  b: 26
}

var ins = new Foo().say.myApply(one)
var ins2 = new Foo().say.apply(one)

// 函数直接使用 this
function bar() { 
  console.log(this.a)
  console.log(this.b)
}

bar.myApply(two)