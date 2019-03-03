# 理解上下文

## 全局上下文

变量对象 --- VO
作用域链 --- scope-chain
this --- this

## 函数上下文

变量对象 --- VO
作用域链 --- scope-chain
this --- this

## eval上下文

变量对象 --- VO
作用域链 --- scope-chain
this --- this

## 实例

```js
var i = 0
function fn () {
  var b = 20
}
fn()

var stack = [globalContext, functionContext]
```

## 全局上下文属性

```js
globalContext.VO = globe
globalContext.VO = {
  a: undefined,
  fn: <Function>
}
```

## 函数上下文属性

```js
functionContext.VO
functionContext.AO
functionContext.VO === functionContext.AO

functionContext.VO = {
  i: undefined,
	b: undefined,
  arguments: <>
}
// arguments 是函数独有的对象(箭头函数没有)
// 该对象是一个伪数组，有 `length` 属性且可以通过下标访问元素
// 该对象中的 `callee` 属性代表函数本身
// `caller` 属性代表函数的调用者
```

## 作用域链

```js
functionContext.[[Scope]] = [globalContext.VO]
functionContext.Scope = functionContext.[[Scope]] + functionContext.VO
functionContext.Scope = [
  functionContext.VO,
  globalContext.VO
]
```

## 立即执行函数

```js
var foo = 1
(function foo() {
    foo = 10
    console.log(foo)
}()) // -> ƒ foo() { foo = 10 ; console.log(foo) }
```

因为当 JS 解释器在遇到非匿名的立即执行函数时，会创建一个辅助的特定对象，然后将函数名称作为这个对象的属性，因此函数内部才可以访问到 foo，但是这个值又是只读的，所以对它的赋值并不生效，所以打印的结果还是这个函数，并且外部的值也没有发生更改。

```js
specialObject = {}
Scope = [specialObject, Scope]

// 实例化
foo = new FunctionExpression;
foo.[[Scope]] = Scope;
specialObject.foo = foo; // {DontDelete}, {ReadOnly}

delete Scope[0]; // remove specialObject from the front of scope chain
```