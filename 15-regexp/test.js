// regexpObj.test('this is test strings')
// returnvalue: boolean

let str = 'Hello world ld'
let result = /^Hello/.test(str)

console.log(result) // true


// string.match(regexpobj)
var str1 = "1 plus 2 equal 3"
var one = str1.match(/\d+/g)
var two = str1.match(/\d+/)
var three = str1.match(/l/g)
console.log(one)
console.log(two)
console.log(three)

