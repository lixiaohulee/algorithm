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
        throw new TypeError('executor is not function')
    }

    this.value = undefined
    this.reason = undefined
    this.status = PENDING
    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []

    const that = this
    function resolve(value) {
        if(that.status === PENDING) {
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
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }

    const promise2 = new Promise((resolve, reject) => {
        if (this.status === FULFILLED) {
            setTimeout(() => {
                try {
                    let x = onFulfilled(this.value)
                    console.log(7777)
                    resolvePromise(promise2, x, resolve, reject)
                }catch(e) {
                    reject(e)
                }
            })
        }

        if (this.status === REJECTED) {
            setTimeout(() => {
                try {
                    let x = onRejected(this.reason)
                    resolvePromise(promise2, x, resolve, reject)
                }catch(e) {
                    reject(e)
                }
            })
        }

        if (this.status === PENDING) {
            this.onFulfilledCallbacks.push(() => {
                setTimeout(() => {
                    try {
                        let x = onFulfilled(this.value)
                        resolvePromise(promise2, x, resolve, reject)
                    }catch(e) {
                        reject(e)
                    }
                })
            })

            this.onRejectedCallbacks.push(() => {
                setTimeout(() => {
                    try {
                        let x = onRejected(this.reason)
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
    console.log(6666666666)
    if (promise2 === x) throw new TypeError('promise2 === x')

    if (x instanceof Promise) {
        x.then(value => {
            resolvePromise(promise2, value, resolve, reject)
        }, reason => {
            reject(reason)
        })
    }

    if (x !== null && (typeof x === 'function' || typeof x === 'object')) {
        let called = false
        try {
            let then = x.then
            if (typeof then === 'function') {
                then.call(x, value => {
                    if (called) return
                    called = true
                    resolvePromise(promise2, value, resolve, reject)
                }, reason => {
                    if (called) return
                    called = true
                    reject(reason)
                })
            }else {
                if (called) return
                called = true
                resolve(x)
            }
        }catch(e) {
            if (called) return
            called = true
            reject(e)
        }
    }else {
        resolve(x)
    }
}






















module.exports = Promise

// Promise.defer = Promise.deferred = function () {
//     let dfd = {};
//     dfd.promise = new Promise((resolve, reject) => {
//         dfd.resolve = resolve;
//         dfd.reject = reject;
//     });
//     return dfd;
// }


console.log(11)

setTimeout(() => {
    console.log(22)
})

new Promise((resolve, reject) => {
    console.log(33)
    resolve(44)
}).then(res => console.log(res))

new Promise((resolve, reject) => {
    console.log(55)
    resolve(66)
}).then(res => console.log(res)).then(res => {
    console.log(66 + '+')
})

setTimeout(() => {
    console.log(77)
})

console.log(88)

