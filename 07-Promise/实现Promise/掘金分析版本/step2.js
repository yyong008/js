function Promise(executor) {   //执行器 
  let self = this;
  self.status = 'pending';
  self.value = undefined;    //默认值
  self.reason = undefined;
  self.onResolvedCallbacks = [];   //存放then成功的回调 数组
  self.onRejectedCallbacks = [];   //存放then失败的回调 数组
  function resolve(data_value) {
    if (self.status === 'pending') {
      self.status = 'resolved';
      self.value = data_value;
      self.onResolvedCallbacks.forEach(function (fn) {   //调用resolve的时候执行保存在onRejectedCallbacks的函数
        fn();
      })
    }
  }
  function reject(data_reason) {
    if (self.status === 'pending') {
      self.status = 'rejected';
      self.reason = data_reason;
      self.onRejectedCallbacks.forEach(function (fn) {   //调用resolve的时候执行保存在onRejectedCallbacks的函数
        fn();
      })
    }
  }

  try {
    executor(resolve, reject);   //当executor中有异步代码时 这部分不会立即执行(但是前面的部分在new的时候还是会执行)
  } catch (e) {
    reject(e);
  }
}

Promise.prototype.then = function (onFulfiled, onRejected) {
  let self = this;
  if (self.status === 'resolved') {
    onFulfiled(self.value);
  }
  if (self.status === 'rejected') {
    onRejected(self.reason);
  }
  //当调用then时可能没成功 也没失败
  if (self.status === 'pending') {             //此时没有resolve也没有reject
    self.onResolvedCallbacks.push(function () {       //用数组是为了保证在异步时有多次promise.then的情况 
      onFulfiled(self.value);
    });
    self.onRejectedCallbacks.push(function () {
      onRejected(self.reason);
    });
  }
}
