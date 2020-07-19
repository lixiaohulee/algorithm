


function isType(type) {
    return function(obj) {
        return Object.prototype.toString.call(obj) === `[object ${type}]`
    }
}

const isArray = isType('Array')
const isObject = isType('Object')

console.log(isArray({}))









Function.prototype.before = function(beforeFunc) {
    let _self = this
    return function() {
        beforeFunc.apply(this,arguments)
        return _self.apply(this, arguments)
    }
}


Function.prototype.after = function(afterFunc) {
    let _self = this
    return function() {
        let ret = _self.apply(this, arguments)
        afterFunc.apply(this, arguments)
        return ret
    }
}

var func = function() {
    console.log(2)
}

func = func.before(function() {
    console.log(1)
}).after(function() {
    console.log(3)
})
func()










