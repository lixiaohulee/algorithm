

const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function Promise(executor) {
  
  this.status = PENDING;
  this.value = undefined;
  this.reason = undefined;
  this.onFulfilled = [];
  this.onRejected = [];

  const self = this;
  function resolve(value) {
    if (self.status === PENDING) {
      self.status = FULFILLED;
      self.value = value;
      self.onFulfilled.forEach(fn => fn());
    }
  }

  function reject(reason) {
    if (self.status === PENDING) {
      self.status = REJECTED;
      self.reason = reason;
      self.onRejected.forEach(fn => fn());
    }
  }

  try {
    executor(resolve, reject);
  } catch(e) {
    reject(e);
  }
} 

Promise.prototype.then = function(onFulfilledCb, onRejectedCb) {
  onFulfilledCb = typeof onFulfilledCb === 'function' ? onFulfilledCb : value => value;
  onRejectedCb = typeof onRejectedCb === 'function' ? onRejectedCb : reason => { throw reason };

  const self = this;
  const promise2 = new Promise((resolve, reject) => {
    if (self.status === FULFILLED) {
      setTimeout(() => {
        try {
          const x = onFulfilledCb(self.value);
          resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      });
    } else if (self.status === REJECTED) {
      setTimeout(() => {
        try {
          const x = onRejectedCb(self.reason);
          resolvePromise(promise2, x, resolve, reject);
        } catch (e) {
          reject(e);
        }
      });
    } else if (self.status === PENDING) {
      self.onFulfilled.push(() => {
        setTimeout(() => {
          try {
            const x = onFulfilledCb(self.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      });
      
      self.onRejected.push(() => {
        setTimeout(() => {
          try {
            const x = onRejectedCb(self.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (e) {
            reject(e);
          }
        });
      })
    }
  });

  return promise2;
}

function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {
    throw new TypeError('chain error');
  }

  if (x && typeof x === 'object' || typeof x === 'function') {
    let used = false;
    try {

      const then = x.then;

      if (typeof then ==='function') {
        then.call(x, (y) => {
          if (used) return;
          used = true;
          resolvePromise(promise2,y,resolve, reject);
        }, (r) => {
          if (used) return;
          used = true;
          reject(r);
        });

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


Promise.all = function(promiseArr) {

  const isIterator = (obj) => {
    return typeof obj === 'object' && obj !== null && typeof obj[Symbol.iterator] === 'function';
  }

  return new Promise((resolve,reject) => {
    if (isIterator(promiseArr)) {
      reject(new TypeError(`TypeError: ${obj} is not iterable (cannot read property Symbol(Symbol.iterator))`));
    }

    const res = [];

    for(let i = 0; i < promiseArr.length; i++) {
      Promise.resolve(promiseArr[i]).then((value) => {
        if (res.length + 1 === promiseArr.length) {
          res.push(value);
          resolve(res);
        }
      }, (err) => {
        reject(err);
      })
    }
  })
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