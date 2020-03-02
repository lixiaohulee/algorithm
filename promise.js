/**
 * 0. Promise是一个构造函数
 * 1. new Promise时，需要传递一个 executor 执行器，执行器立刻执行
 * 2. executor 接受两个参数，分别是 resolve 和 reject
 * 3. promise 只能从 pending 到 rejected, 或者从 pending 到 fulfilled
 * 4. promise 的状态一旦确认，就不会再改变
 * 5. promise 都有 then 方法，then 接收两个参数，分别是 promise 成功的回调 onFulfilled, 
 *      和 promise 失败的回调 onRejected
 * 
 * 6. 如果调用 then 时，promise已经成功，则执行 onFulfilled，并将promise的值作为参数传递进去。
 *      如果promise已经失败，那么执行 onRejected, 并将 promise 失败的原因作为参数传递进去。
 *      如果promise的状态是pending，需要将onFulfilled和onRejected函数存放起来，等待状态确定后，再依次将对应的函数执行(发布订阅)
 * 
 * 7. then 的参数 onFulfilled 和 onRejected 可以缺省
 * 8. promise 可以then多次，promise 的then 方法返回一个 promise
 * 9. 如果 then 返回的是一个结果，那么就会把这个结果作为参数，传递给下一个then的成功的回调(onFulfilled)
 * 10. 如果 then 中抛出了异常，那么就会把这个异常作为参数，传递给下一个then的失败的回调(onRejected)
 * 11.如果 then 返回的是一个promise,那么需要等这个promise，那么会等这个promise执行完，promise如果成功，
 *   就走下一个then的成功，如果失败，就走下一个then的失败
 */


const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

function Promise(executor) {
    if (typeof executor !== 'function') {
        throw new TypeError(`executor must be a function`)
    }

    this.value = undefined
    this.reason = undefined
    this.status = PENDING
    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []

    let that = this
    function resolve(value) {
        if (that.status === PENDING) {
            that.status = FULFILLED
            that.value = value
            that.onFulfilledCallbacks.forEach(fn => fn())
        }
    }

    function reject(reason) {
        if (that.status === PENDING) {
            that.status = REJECTED
            that.reason = reason
            that.onRejectedCallbacks.forEach(fn => fn())
        }
    }

    try {
        executor(resolve, reject)
    }catch(e) {
        reject(e)
    }
}

Promise.prototype.then = function(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason}

    const that = this

    const promise2 = new Promise((resolve, reject) => {
        if (that.status === FULFILLED) {
            setTimeout(function() {
                try {
                    let x = onFulfilled(that.value)
                    resolvePromise(promise2, x, resolve,  reject)
                }catch(e) {
                    reject(e)
                }
            })
        }
    
        if (that.status === REJECTED) {
            setTimeout(function() {
                try {
                    let x = onRejected(that.reason)
                    resolvePromise(promise2, x, resolve,  reject)
                }catch(e) {
                    reject(e)
                }
            })
        }
    
        if (that.status === PENDING) {
            that.onFulfilledCallbacks.push(() => {
                setTimeout(() => {
                    try {
                        let x = onFulfilled(that.value)
                        resolvePromise(promise2, x, resolve, reject)
                    }catch(e) {
                        reject(e)
                    }
                })
            })
            that.onRejectedCallbacks.push(() => {
                setTimeout(() => {
                    try {
                        let x = onRejected(that.reason)
                        resolvePromise(promise2, x, resolve, reject)
                    }catch(e) {
                        reject(e)
                    }
                })
            })
        }
    })

    return promise2
}


function resolvePromise(promise2, x, resolve, reject) {
    if (x === promise2) reject(new TypeError('Chaining cycle detected for promsie'))

    let used = false
    if (x instanceof Promise) {
        x.then(value => {
            resolvePromise(promise2, value, resolve, reject)
        }, reason => reject(reason))
    }else if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
        try {
            let then = x.then
            if (typeof then === 'function') {
                then.call(x, value => {
                    if (used) return
                    used = true
                    resolvePromise(promise2, value, resolve, reject)
                }, reason => {
                    if (used) return 
                    used = true
                    reject(reason)
                })
            }else {
                if (used) return
                used = true
                resolve(x)
            }

        }catch(e) {
            if (used) return
            used = true
            reject(e)
        }
    }else {
        if (used) return
        used = true
        resolve(x)
    }
}



console.log(1)
new Promise((resolve, reject) => {
    console.log(2)

    // resolve(3)


    setTimeout(() => {
        resolve(3)
    }, 5000)
}).then(res => {
    console.log(res)
    // resolve(res)
    return new Promise((resolve, reject) => {
        resolve(6)
    }).then(res => console.log(res))
}).then(res => res).then(res => console.log(res))
console.log(4)


Promise.defer = Promise.deferred = function () {
    let dfd = {};
    dfd.promise = new Promise((resolve, reject) => {
        dfd.resolve = resolve;
        dfd.reject = reject;
    });
    return dfd;
}


module.exports = Promise



