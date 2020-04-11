



const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

function Promise(exector) {
    if (typeof exector !== 'function') {
        throw new TypeError(`promise resolver is not function`)
    }

    this.status = 'pending'
    this.value = undefined
    this.reason = undefined
    this.onRejectedCallbacks = []
    this.onFulFilledCallbacks = []

    const that = this

    function resolve(value) {
        if (that.status === PENDING) {
            that.status = FULFILLED
            that.value = value
            that.onFulFilledCallbacks.forEach(func => func())
        }
    }

    function reject(reason) {
        if (that.status === PENDING) {
            that.status = REJECTED
            that.reason = reason
            that.onRejectedCallbacks.forEach(func => func())
        }
    }

    try {
        exector(resolve, reject)
    }catch(e) {
        reject(e)
    }
}


Promise.prototype.then = function(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }

    const promise = new Promise((resolve, reject) => {
        if (this.status === FULFILLED) {
            const timer = setTimeout(() => {
                try {
                    let x = onFulfilled(this.value)
                    clearTimeout(timer)
                    resolvePromise(promise,x,resolve,reject)
                }catch(e) {
                    reject(e)
                }
            })
        }else if (this.status === REJECTED) {
            const timer = setTimeout(() => {
                try {
                    let x = onRejected(this.reason)
                    clearTimeout(timer)
                    resolvePromise(promise,x,resolve, reject)
                }catch(e) {
                    reject(e)
                }
            })
        }else if (this.status === PENDING) {
            this.onFulFilledCallbacks.push(() => {
                const timer = setTimeout(() => {
                    try {
                        let x = onFulfilled(this.value)
                        clearTimeout(timer)
                        resolvePromise(promise,x,resolve, reject)
                    }catch(e) {
                        reject(e)
                    }
                })
            })
            this.onRejectedCallbacks.push(() => {
                const timer = setTimeout(() => {
                    try {
                        let x = onRejected(this.reason)
                        clearTimeout(timer)
                        resolvePromise(promise,x,resolve, reject)
                    }catch(e) {
                        reject(e)
                    }
                })
            })
        }
    })


    return promise
}


function resolvePromise(promise, x, resolve, reject) {
    if (promise === x) {
        reject(new TypeError('Chaining cycle'))
    }

    if (x instanceof Promise) {
        x.then(res => {
            resolvePromise(promise, res, resolve, reject)
        }, err => {
            reject(err)
        })
    }


    if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
        let called = false
        try {
            let then = x.then
            if (typeof then === 'function') {
                then.call(x, res => {
                    if (called) return
                    called = true
                    resolvePromise(promise, res, resolve, reject)
                }, err => {
                    if (called) return
                    called = true
                    reject(err)
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


Promise.resolve = function(param) {
    if (param instanceof Promise) {
        return param
    }

    return new Promise((resolve, reject) => {
        if (param && param.then && typeof param.then === 'function') {
            setTimeout(() => {
                param.then(resolve, reject)
            })
        }else {
            resolve(param)
        }
    })
}


Promise.reject = function(param) {
    return new Promise((resolve, reject) => {
        reject(param)
    })
}



Promise.defer = Promise.deferred = function(){
    let dfd = {};
    dfd.promise = new Promise((resolve, reject)=>{
        dfd.resolve = resolve;
        dfd.reject = reject;
    });
    return dfd;
}






module.exports = Promise










// new Promise((resolve, reject) => {
//     // setTimeout(() => {
//     //     resolve('3333')

//     // })
//     resolve(44444)
// }).then(res => {
//     console.log(res)
//     return 2222
// }, err => {
//     console.log(err)
// }).then(res => {
//     console.log(res)
// }).then(res => {
//     console.log(res)
// }, err => {
//     console.log(err)
// })


