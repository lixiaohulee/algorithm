/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
let res  = 0
var multiply = function(A, B) {
    if (A === 0) {
        return 
    }

    res += B 
    multiply(A-1, B)

    return res
};

console.log(multiply(7, 4))
