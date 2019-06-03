// import throttle from './throttle.js'




function throttle(func, delay) {
    if (typeof func !== 'function') {
        throw new TypeError('func need a function')
    }
    if (typeof delay !== 'number') {
        throw new TypeError('delay must be a number')
    }
    let lastTime = 0
    return function(...args) {
        const _this = this
        const now = new Date().getTime()
        if (now - lastTime < delay) {
            return
        }
        func.apply(_this, args)
        lastTime = now
    }
}

const callback = throttle(() => console.log('lixiaohu'), 500)

window.addEventListener('scroll',callback, false)