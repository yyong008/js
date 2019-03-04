var numbers = [15.5, 2.3, 1.1, 4.7];

function getSum(total, num) {
  // total 是上一次返回的结构
  // num 是这次的
  return total + Math.round(num)
}

function myFunction(item) {
  var result = numbers.reduce(getSum, 0)
  console.log(result)
}

myFunction()