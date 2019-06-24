



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


function handleInput() {
    console.log(2222)
}


handleInput = debounce(handleInput, 500)