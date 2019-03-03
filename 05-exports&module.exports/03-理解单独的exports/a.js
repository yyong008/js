module.exports.add = {
  x: 1
}
exports.add = { // exports 就是一个普通的对象，不具有输出的功能
  x: 12
}

console.log(module.exports == exports)