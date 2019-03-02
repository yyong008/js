function create(Fn, name, age) {
  // 创建一个空的对象
  let obj = new Object()

  // 获得构造函数
  let Con = [].shift.call(arguments) // 此时是空的怎么截取啊
  // 链接到原型
  obj.__proto__ = Con.prototype
  // 绑定 this，执行构造函数
  let result = Con.apply(obj, arguments)
  // 确保 new 出来的是个对象
  return typeof result === 'object' ? result : obj
}


function Person(name, age) {
  this.name = name
  this.age = age

}

var obj01 = create(Person, 'yyong', 26)

console.log(obj01)

// 实现 new 关键的功能的两个要点
// 实例对象指向构造函数原型 instance.__proto__ === Constr.prototype
// 构造函数调用一次，产生一个新的对象，染回这个对象即可

// 将整个过程封装在一个函数里面完整