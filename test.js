






function debounce(func, delay) {
    var timer = null
    return function(...args) {
        clearTimeout(timer)
        const _this = this
        timer = setTimeout(function() {
            return func.apply(_this, args)
        }, delay)
    }
}

function handleInput() {
    console.log(34343)
}


handleInput = debounce(handleInput, 500)