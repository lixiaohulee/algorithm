/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let res = []

    s = s.split('')
    for (let i = 0, len = s.length; i < len; i++) {
        res[indices[i]] = s[i]
    }
    return res.join('') 
};