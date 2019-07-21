
/**
 * @file countNum.js
 * 
 */



/**
 * 统计数字 lintcode
 * @param k: An integer
 * @param n: An integer
 * @return: An integer denote the count of digit k in 1..n
 */
const digitCounts = function (k, n) {
    // write your code here
    if (k < 0 || k > n) {
        return 0
    }
    let times = 0
    for (let i = 0; i <= n; i++) {
        i += ''
        for (let j = 0; j <= i.length - 1; j++) {
            k == i[j] 
                ? times++ 
                : null
        }
    }
    return times
}
