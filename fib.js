/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n < 2) return n
    let a = 0
    let b = 1
    for (let i = 2; i <= n; i++) {
        let sum = a + b
        a = b
        b = sum % 1000000007
    }
    return b
};

console.log(fib(81))