


function isType(type) {
    return function(obj) {
        return Object.prototype.toString.call(obj) === `[object ${type}]`
    }
}

const isArray = isType('Array')
const isObject = isType('Object')

console.log(isArray({}))