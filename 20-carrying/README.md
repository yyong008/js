# 柯里化和反柯里化

## 柯里化

1. 延迟执行，能够记忆函数
2. 使用闭包返回函数
3. 寻找一个合适的条件后执行函数

```js
/**
 * @params {Function} 柯里化最后一步执行函数
 * @return {Function} 闭包函数---返回一个函数：next，next是递归的调用，缓存参数
 */
function currying(fn){
    var allArgs = []; // 用来接收参数

    return function next(){
        var args = [].slice.call(arguments);

        // 判断是否执行计算
        if(args.length > 0){
            allArgs = allArgs.concat(args); // 收集传入的参数，进行缓存
            return next;
        }else{
            return fn.apply(null, allArgs); // 符合执行条件，执行计算,
        }
    }
}

// 类似于回调的思想，回调的在所有的参数缓存完毕了，执行函数

var add = currying(function(){
    var sum = 0;
    for(var i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
});
```

变种的思考: 实现 add(1)(2, 3)(4)(5) = 15 的效果?

> js在获取当前变量值的时候，会根据语境，隐式调用valueOf和toString方法进行获取需要的值。

```js
function currying(fn){
    var allArgs = [];

    function next(){
        var args = [].slice.call(arguments);
        allArgs = allArgs.concat(args);
        return next;
    }
    // 字符类型
    next.toString = function(){
        return fn.apply(null, allArgs);
    };
    // 数值类型
    next.valueOf = function(){
        return fn.apply(null, allArgs);
    }

    return next;
}
var add = currying(function(){
    var sum = 0;
    for(var i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
});

add(1)(2, 3)(4)(5)
```

### 思路

是这样的：

就是将函数放在柯里化函数currying里执行，执行返回的就是缓存参数的函数，一直调用一直缓存，没有新的参数添加进来了，我们就拿这些参数去执行这些参数。

curry函数传入一个函数fn, 这个函数会在`合适的时机`执行, 难点1： 如何确定这个时机点；
curry函数必须要有一种能力，保存参数, 如何缓存参数；难点如何缓存参数

缓存参数： 数组 + 闭包
执行时机： 看具体的需求，这里有两中涉及的情况： 1. 最后调用的一次没有参数；2. 最后一次调用的数据也有参数

## 反柯里化

```js
// 轻提示
function Toast(option){
  this.prompt = '';
}
Toast.prototype = {
  constructor: Toast,
  // 输出提示
  show: function(){
    console.log(this.prompt);
  }
};

// 新对象
var obj = {
    prompt: '新对象'
};

// 反柯里化：准备好执行环境，和要传的参数，在适当的时候执行函数
// 柯里化函数处理好：执行环境和参数，返回函数的执行
function unCurrying(fn){
    return function(){
        var args = [].slice.call(arguments);
        var that = args.shift();
        return fn.apply(that, args);
    }
}

// 执行函数反柯里化，反柯里化做了作用域指向和参数传递
var objShow = unCurrying(Toast.prototype.show);

// 传入要执行函数的作用域
objShow(obj); // 输出"新对象"

```

本质： 函数在特定`ctx`中执行，分成两部完成

1. 传入函数，然后一个`返回`反柯里化函数
2. 反柯里化函数传入参数，并执行，将 ctx 和 args 从 arguments 分离出来！

### 更加简单的方式实现反柯里化

```js
Function.prototype.unCurrying = function(){
    var self = this;
    return function(){
        return Function.prototype.call.apply(self, arguments);
    }
}

// 使用
var objShow = Toast.prototype.show.unCurrying();
objShow(obj);

```

### 反柯里化的使用场景

1. addEventListener 我们需要我们事件监听的回调函数独立出来，然后对一类事件进行监听这样就可以可以使用了;
2. 类型的判断

## 参考

- [柯里化和反柯里化](https://juejin.im/post/5b561426518825195f499772#comment)

## 额外收货

1. 类数组对象 => 数组

在 es5 之前， 将函数的参数arguments转换成数组的方法，就是配个slice方法

```js
var args = [].slice.call(arguments);
arguments.slice()
```