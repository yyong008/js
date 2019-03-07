[].forEach((item) => {debugger;console.log(123)});
var one = true && [1,3,4].forEach(item => (item*2)) //forEach 没有返回值始终为undefined
var two = true && [1, 3, 4].map(item => (item * 2)) // map 是可以返回值的
var oone = typeof [] === 'string' && [1,2,3].map((item) => {;console.log(item);return item *2})
console.log(one)
console.log(oone)

/**
 * && 操作符就是
 * if(a === b) {
 *  console.log('23')
 * }
 * 
 * === 等价于
 *  a === b && console.log('23') 
 *  左右两边都是表达式，不能是函数
 */