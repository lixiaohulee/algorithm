

function MyPromise(execctor) {
  if (typeof execctor !== 'function') {
    throw new TypeError('executor must be a function');
  }

  this.status = 'padding';
  this.value = undefined;
  this.reason = null;
  this.onFulFilledCb = [];
  this.onRejectedCb = [];
  
  const that = this;
  function resolve(value) {
    if (that.status === 'padding') {
      that.status = 'fulfilled';
      this.value = res;
      that.onFulFilledCb.forEach(cb => cb(res));
    }
  }
  function reject(reason) {
    if (that.status === 'padding') {
      that.status = 'rejected';
      that.reason = reason;
      that.onRejectedCb.forEach(cb => cb(err));
    }
  }

  try {
    execctor(resolve, reject);
  } catch(e) {
    reject(e);
  }
}


MyPromise.prototype.then = function(onFulfilled, onRejected) {
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
  onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason };

  const that = this;
  const promiseThenReturned = new Promise((resolve, reject) => {
    if (that.status === 'fulfilled') {
      setTimeout(() => {
        try {
          let x = onFulfilled(that.value);
          resolvePromise(promiseThenReturned, x, resolve, reject);
        } catch(e) {
          reject(e);
        }
      })
    } else if (that.status === 'rejected') {
      setTimeout(() => {
        try {
          let x = onRejected(that.reason);
          resolvePromise(promiseThenReturned, x, resolve, reject);
        } catch(e) {
          reject(e);
        }
      })
    } else if (that.status === 'padding') {
      that.onFulFilledCb.push(() => {
        setTimeout(() => {
          try {
            let x = onFulfilled(that.value);
            resolvePromise(promiseThenReturned, x, resolve, reject);
          } catch(e) {
            reject(e);
          }
        })
      })
      that.onRejectedCb.push(() => {
        setTimeout(() => {
          try {
            let x = onRejected(that.reason);
            resolvePromise(promiseThenReturned, x, resolve, reject);
          } catch(e) {
            reject(e);
          }
        })
      })
    }
  })

  return promiseThenReturned;
}


function resolvePromise(promise, x, resolve, reject) {
  if (promise === x) {
    reject(new TypeError(x));
  } 
  if (x && (typeof x === 'object' || typeof x === 'function' )) {
    let used = false;
    try {
      let then = x.then;
      if (typeof then === 'function') {
        then.call(x, y => {
          if (used) return;
          used = true;
          resolvePromise(promise, y, resolve, reject);
        }, e => {
          if (used) return;
          used = true;
          reject(e);
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
    if (used) return;
    used = true;
    resolve(x);
  }
}

MyPromise.defer = MyPromise.deferred = function () {
  let dfd = {};
  dfd.promise = new MyPromise((resolve, reject) => {
      dfd.resolve = resolve;
      dfd.reject = reject;
  });
  return dfd;
}


const p = new MyPromise((resolve, reject) => {
  console.log(3333);
  resolve(33333)
})