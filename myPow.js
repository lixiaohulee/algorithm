/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    let res = 1
    let flag = n > 0 ? false : true
    n = Math.abs(n)
    while(n>=1) {
        res *= x 
        n--
    }

    return flag ? 1/res : res
};


console.log(myPow(2, -2147483648))