// import throttle from './throttle.js'




function throttle(func, delay) {
    if (typeof func !== 'function' || typeof delay !== 'number') {
        throw new TypeError('arguments type error')
    }
    
    let canRun = true
    return function(...args) {
        if(!canRun) {
            return
        }

        canRun = false
        const _this = this
        const timer = setTimeout(function(){
            func.apply(_this, args)
            canRun = true
            clearTimeout(timer)
        }, delay)
    }
}

const callback = throttle(() => console.log(3333), 500)
window.addEventListener('scroll',callback, false)