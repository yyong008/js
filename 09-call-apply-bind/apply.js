/**
 * @call
 * @apply
 * @bind
 * js中的模拟实现加深映像
 */

Function.prototype.myCall = function (context) {
  
  var context = context || window
  // 给 context 添加一个属性
  // getValue.call(a, 'yck', '24') => a.fn = getValue
  context.fn = this
  var one = arguments
  var test = [...arguments]
  // 将 context 后面的参数取出来
  var args = [...arguments].slice(1)
  console.log(args)
  console.log(arguments)
  // getValue.call(a, 'yck', '24') => a.fn('yck', '24')
  var result = context.fn(...args)
  // 删除 fn
  debugger
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

var ins = new Foo().say.myCall(one)
var ins2 = new Foo().say.call(one)
// console.log(ins)