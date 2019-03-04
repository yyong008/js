//实现功能: 当执行器中调用resolve(),则then中只执行onFulfiled方法,执行器中调用reject(),则then中只执行onRejected方法, 当两个方法都有的时候,以先执行的方法为准,后执行的方法对then不产生影响.
function Promise(executor) {   //执行器 
  let self = this;
  self.status = 'pending';   //引入状态,对两个方法都有的情况进行区分
  self.value = undefined;    //默认值
  self.reason = undefined;
  function resolve(data_value) {
    if (self.status === 'pending') {
      self.status = 'resolved';
      self.value = data_value;
    }
  }
  function reject(data_reason) {
    if (self.status === 'pending') {
      self.status = 'rejected';
      self.reason = data_reason;
    }
  }
  //如果executor是同步代码 进行try catch获取其中的异常 如果有异常 把异常传到reject
  try {
    executor(resolve, reject);
  } catch (e) {
    reject(e);                 //调用reject并把捕获的error作为参数传给reject
  }
}

Promise.prototype.then = function (onFulfiled, onRejected) {
  let self = this;
  if (self.status === 'resolved') {
    onFulfiled(self.value);
  }
  if (self.status === 'rejected') {
    onRejected(self.value);
  }
}
