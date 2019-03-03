function a() {
  console.log("this is a !")
}

const b = {
  x: 1,
  y: 2
}
module.exports.a = a
module.exports.b = b