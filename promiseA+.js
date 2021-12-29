

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
  onRejected = typeof onRejected === 'function' ? onRejected : (reason) => { throw reason };

  const self = this;

  const promise1 = new Promise(function(resolve, reject) {
    if (self.status === FULFILLED) {
      setTimeout(function() {
        try {
          const x = onFulfilled(self.value);
          resolvePromise(promise1, x, resolve, reject);
        } catch(e) {
          reject(e);
        }
      })
    } else if (self.status === REJECTED) {
      setTimeout(function() {
        try {
          const x = onRejected(self.reason);
          resolvePromise(promise1, x, resolve, reject);
        } catch(e) {
          reject(e);
        }
      })
    } else if (self.status === PENDING) {
      self.onFulfilledCb.push(function() {
        setTimeout(function() {
          try {
            const x = onFulfilled(self.value);
            resolvePromise(promise1, x, resolve, reject);
          } catch(e) {
            reject(e);
          }
        })
      });

      self.onRejectedCb.push(function() {
        setTimeout(function() {
          try {
            const x = onRejected(self.reason);
            resolvePromise(promise1, x, resolve, reject);
          } catch(e) {
            reject(e);
          }
        })
      })
    }
  });

  return promise1;
}

function resolvePromise(promise1, x, resolve, reject) {
  const self = this;
  
  if (promise1 === x) {
    reject(new TypeError('Chaining cycle'));
  }

  if (x && typeof x === 'object' || typeof x === 'function') {
    let used = false;

    try {
      const then = x.then;

      if (typeof then === 'function') {
        then.call(x, (y) => {
          if (used) return;
          used = true;
          resolvePromise(promise1, y, resolve, reject);
        }, (r) => {
          if (used) return;
          used = true;
          reject(r);
        })
      } else {
        if (used) return;
        used = true;
        resolve(x);
      }
    } catch(e) {
      if (used) return;
      used = true;
      reject(e);
    }
    
  } else {
    resolve(x);
  }
}


module.exports = Promise;


Promise.defer = Promise.deferred = function () {
  let dfd = {};
  dfd.promise = new Promise((resolve, reject) => {
      dfd.resolve = resolve;
      dfd.reject = reject;
  });
  return dfd;
}