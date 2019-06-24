/**
 * @file throttle.js
 * @author lixiaohu(lixiaohu_neuq@163.com)
 */



/**
 * 函数节流 
 * 优化高频率执行函数的一种手段
 * 函数会在指定时间间隔内执行一次，比如每500ms执行一次
 * 如果在指定的时间间隔内多次重复触发函数，只有一次会执行
 * (变量的作用域等)
 * 
 * @param {Function} func
 * @param {Number} dalay 毫秒
 * @returns {Function}
 */
function throttle(func, delay) {
    if (typeof func !== 'function') {
        throw new TypeError('func need a function')
    }
    if (typeof dalay !== 'number') {
        throw new TypeError('delay must be a number')
    }
    let lastTime = 0
    return function(...args) {
        const _this = this
        const now = new Date().getTime()
        if (now - lastTime < dalay) {
            return
        }
        func.apply(_this, args)
        lastTime = now
    }
}


function throttleTime(func, delay) {
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




