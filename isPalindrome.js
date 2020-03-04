/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false
    }

    let y = x.toString().split('')
    let len = y.length

    for(let i = 0; i <= len - 1; i++) {
        if (y[i] !== y[len - i -1]) return false
    }

    return true

};