function instanceofTest (ins, con) { // ins: instance , con: constructor
  // 获得类型的原型
  let prototype = con.prototype
  // 获得对象的原型
  ins = ins.__proto__
  // 判断对象的类型是否等于类型的原型
  while (true) {
    if (ins === null) return false
    if (prototype === ins) return true
    ins = ins.__proto__
  }
}

function Person (name ,age) {
  this.name = name
  this.age = age
}

var my = new Person('yyong', 12)

let isInstance = instanceofTest(my, Person)

console.log(isInstance)
debugger