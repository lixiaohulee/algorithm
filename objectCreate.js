/**
 * Object.create()方法的实现
 * @param {Object} base
 * @param {Object} new property object
 * @returns {Object} new obj
 */

function create(base, propertyObj = {}) {
    function Func() {}
    Func.prototype = base
    const newObj = new Func()   //TODO 这里应该要处理new的实现，不然无法做到Object.create(null)
    Object.keys(propertyObj).length > 0 && Object.keys(propertyObj).forEach(key => {
        Object.defineProperty(newObj, key.toString(), propertyObj[key])
    })
    return newObj
}

const person = {
    name: 'hello'
}

const p = create(null)






function create(target) {
    function Func() {}
    Func.prototype = target;

    return new Func();
} 