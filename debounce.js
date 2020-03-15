/**
 * @file debounce.js
 * @author lixiaohu(lixiaohu_neuq@163.com)
 */

/**
 * 函数防抖
 * 你尽管触发事件，但我一定是在事件触发n秒后才会执行函数，如果你在事件触发之后的n秒之内又再次的
 * 触发了事件，则以新的事件触发时间为准，n秒后再执行
 * 总之就是要等你触发完事件n秒内不再触发事件 我才执行
 * 函数防抖就是任务频繁触发的情况下，只有任务触发的间隔超过指定间隔的时候，任务才会执行
 */
function debounce(func, delay) {
    if (typeof func !== 'function' || typeof delay !== 'number') {
        throw new TypeError('arguments type error')
    }

    var timer = null
    return function(...args) {
        clearTimeout(timer)
        var _this = this
        timer = setTimeout(function() {
            clearTimeout(timer)
            return func.apply(_this, args)  
        }, delay)
    }
}