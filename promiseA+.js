

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

  self.onFulfilledCb = [];
  self.onRejectedCb = [];


  function resolve(value) {
    if (self.status === PENDING) { // TODO 为什么这里要做这个判断呢？
      self.status = FULFILLED;
      self.value = value;
      // self.onFulfilled.forEach((callback) => callback(value));
      self.onFulfilledCb.forEach(callback => callback());
    }
  }

  function reject(reason) {
    if (self.status === PENDING) { // TODO 为什么这里要做这个判断呢？
      self.status = REJECTED;
      self.reason = reason;
      // self.onRejected.forEach((callback) => callback(reason));
      self.onRejectedCb.forEach(callback => callback());
    } 
  }

  try {
    executor(resolve, reject);
  } catch(e) {
    reject(e);
  }
}

Promise.prototype.then = function(onFulfilled, onRejected) {
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (value) => value;
  onRejected = typeof onRejected === 'function' ? onRejected : (reason) => reason;

  const self = this;

  return new Promise(function(resolve, reject) {
    if (self.status === FULFILLED) {
      const x = onFulfilled(self.value);
    }

    if (self.status === REJECTED) {
      const x = onRejected(self.reason);
    }

    if (self.status === PENDING) {
      self.onFulfilledCb.push(function() {
        const x = onFulfilled(self.value);
      })

      self.onRejectedCb.push(function() {
        const x = onRejectedCb(self.reason);
      })
    }
  })
}