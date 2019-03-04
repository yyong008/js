// reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
// reduce() 可以作为一个高阶函数，用于函数的 compose。

function getSum(total, num) {
  return total + num;
}

var numbers = [65, 4, 12, 4]

var total = numbers.reduce(getSum)
console.log(total)


// reduce
// 接受一个函数作为累加器
Array.reduce(function(total, currentValue, currentIndex, arr){}, initialValue)