/**
 * @file simulationNew.js
 * @author lixiaohu(lixiaohu_neuq@163.com)
 */

/**
 * 模拟new关键字的过程
 * @param {Function} func构造函数
 * @returns {Object} 实例化后的对象
 */ 


 //实现的有问题
function simulationNew(func) {
    if (typeof func !== 'function') {
        throw new TypeError('need a function')
    }

    const obj = {}
    func.apply(obj, [])
    return obj
}