




/**
 * 判断是否是一个合法的邮箱
 * @param {String} 
 * @returns {Boolean}
 */


function isAEmail(emailStr) {
    if (typeof emailStr !== 'string') {
        throw new TypeError('emailStr must be a string')
    }

    const pattern = /^\w+@\w+\.\w+/gi

    return  pattern.test(emailStr)
}


console.log(isAEmail('@234.m'))