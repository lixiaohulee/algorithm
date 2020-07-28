

function create(proto, propertiesObj) {
    var Func = function() {}
    Func.prototype = proto
    var newObj = new Func()
    Object.defineProperties(newObj, propertiesObj)

    return newObj
}


function Func() {
    this.name = 'lixiaohu'
    this.age = 334
    return 434343434343434
}


let a = new Func()

console.log(a)