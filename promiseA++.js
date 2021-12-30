


const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';


function Promise(executor) {
  const self = this;

  self.status = PENDING;
  self.value = undefined;
  self.reason = undefined;
  self.onFulfilledCb = [];
  self.onRejectedCb = [];

  function resolve(value) {
    if (self.status === PENDING) {
      self.status = FULFILLED;
      self.value = value;
      self.onFulfilledCb.forEach(fn => fn());
    }
  }

  function reject(reason) {
    if (self.status === PENDING) {
      self.status = REJECTED;
      self.reason = reason;
      self.onRejectedCb.forEach(fn => fn());
    }
  }

  try {
    executor(resolve, reject);
  } catch(e) {
    reject(e);
  }
}

Promise.prototype.then = function(onFulfilled, onRejected) {
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
  onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason };

  const self = this;

  const promise2 = new Promise((resolve, reject) => {
    if (self.status === FULFILLED) {
      setTimeout(() => {
        try {
          const x = onFulfilled(self.value);
          resolvePromise(promise2, x, resolve, reject);
        } catch(e) {
          reject(e);
        }
      })

    } else if (self.status === REJECTED) {
      setTimeout(() => {
        try {
          const x = onRejected(self.reason);
          resolvePromise(promise2, x, resolve, reject);
        } catch(e) {
          reject(e);
        }
      })

    } else if (self.status === PENDING) {
      self.onFulfilledCb.push(() => {
        setTimeout(() => {
          try {
            const x = onFulfilled(self.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch(e) {
            reject(e);
          }
        })
      })

      self.onRejectedCb.push(() => {
        setTimeout(() => {
          try {
            const x = onRejected(self.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch(e) {
            reject(e);
          }
        })
      })
    }
  })

  return promise2;
}

function resolvePromise(promise2, x, resolve, reject) {
  
  if (x === promise2) {
    reject(new TypeError('Chaining cycle'))
  }

  
  if (x && typeof x === 'object' || typeof x === 'function') {
    let used = false;

    try {

      const then = x.then;

      if (typeof then === 'function') {
        then.call(x, (y) => {
          if (used) return;
          used = true;
          resolvePromise(promise2, y, resolve, reject);
        }, (r) => {
          if (used) return;
          used = true;
          reject(r);
        })
      } else {
        if(used) return;
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