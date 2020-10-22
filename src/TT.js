const PromiseCopy = function (fn) {
  this.info = {
    status: 'pending',
    value: '',
  }

  let self = this
  self.onFulfilledArr = [] // then函数里面的第一个函数的集合
  self.onRejectedArr = [] //then函数里面的第二个函数的集合

  const resolve = function (value) {
    if (self.info.status === 'pending') {
      self.info.status = 'onFulfilled'
      self.info.value = value
      self.onFulfilledArr.forEach((fn) => fn(value))
    }
  }
  const reject = function (value) {
    if (self.info.status === 'pending') {
      self.info.status = 'onRejected'
      self.info.value = value
      self.onRejectedArr.forEach((fn) => fn(value))
    }
  }
  fn(resolve, reject)
}
