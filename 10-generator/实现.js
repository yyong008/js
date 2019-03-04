function generator(cb) {
  return (function () {
    var object = {
      next: 0,
      stop: function () {}
    }

    return {
      next: function () {
        var ret = cb(object)
        if(ret === undefined) return {value: undefined, done: true}
        return {
          value: ret,
          done: false
        }
      }
    }
  })()
}

// 使用 babel 编译后，会变成这样

function test() {
  var a;
  return generator(function(_context) {
    while(1){
      switch((_context.prev = _context.next)) {
        case 0:
          a = 1 + 2
          _context.next = 4
          return 2
        case 4:
          _context.next = 6
        case 6:
        case "end":
          return _context.stop();
      }
    }
  })
}