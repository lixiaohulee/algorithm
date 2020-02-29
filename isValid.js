



var isValid = function(s) {

    if (typeof s !== 'string') return false

    if (s.length === 0) return true

    let stack = []

    s = s.split('')

    for(let index = 0; index <= s.length - 1; index++) {
        let char = s[index]
        if (char === '(') {
            stack.push(')')
        }else if (char === '{') {
            stack.push('}')
        }else if (char === '[') {
            stack.push(']')
        }else if (stack.pop() !== char) {
            return false
        }
    }

    return stack.length === 0

};


const s = '(]'

console.log(isValid(s))

