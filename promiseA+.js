

const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function Promise(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError(`Promise resolver ${executor} is not a function`);
  }

  const self = this;

  self.status = PENDING;
  self.value = undefined;
  self.reason = undefined;

  self.onFulfilled = [];
  self.onRejected = [];


  function resolve(value) {
    if (self.status === PENDING) { // TODO 为什么这里要做这个判断呢？
      self.status = FULFILLED;
      self.value = value;
      // self.onFulfilled.forEach((callback) => callback(value));
      self.onFulfilled.forEach(callback => callback());
    }
  }

  function reject(reason) {
    if (self.status === PENDING) { // TODO 为什么这里要做这个判断呢？
      self.status = REJECTED;
      self.reason = reason;
      // self.onRejected.forEach((callback) => callback(reason));
      self.onRejected.forEach(callback => callback());
    } 
  }

  try {
    executor(resolve, reject);
  } catch(e) {
    reject(e);
  }
}