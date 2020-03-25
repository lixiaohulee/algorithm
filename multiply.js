/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
var multiply = function(A, B) {
    if (A === 1) {
        return B
    }

    return multiply(A-1, B) + B
};


console.log(multiply(900,6))
