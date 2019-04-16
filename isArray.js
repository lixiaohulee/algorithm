



const isArray = arr => Object.prototype.toString.call(arr) === '[object Array]'

console.log(isArray(Object.keys([])))