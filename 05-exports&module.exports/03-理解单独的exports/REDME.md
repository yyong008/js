# 理解各种输出的情况 exports/module.exports

## exports

## module.exports

```js
// 理解输出对象
// a.js
module.exports = {
  x: 1
}
exports = { // exports 就是一个普通的对象，不具有输出的功能
  x: 12
}
console.log(module.exports == exports) // false

// index.js
const one = require('./a')
console.log(one) // {x: 1}
```

```js
// 理解输出对象
// a.js
module.exports = {
  x: 1
}
exports.add = { // exports.add 就是一个普通的对象，不具有输出的功能
  x: 12
}
console.log(module.exports == exports) // 

// index.js
const one = require('./a')
console.log(one) // {x: 1}
```

```js
// 理解输出对象
// a.js
module.exports.add = {
  x: 1
}
exports.add = { // exports.add 就是一个普通的对象，不具有输出的功能
  x: 12
}
console.log(module.exports == exports) //true

// index.js
const one = require('./a')
console.log(one) // {add: {x:12}}
```

```js
// 理解输出对象
// a.js
module.exports.add = {
  x: 1
}
exports.bgg = { // exports.add 就是一个普通的对象，不具有输出的功能
  x: 12
}
console.log(module.exports == exports) //true

// index.js
const one = require('./a')
console.log(one) // {add: {x: 1}, bgg: {x:12}}
```