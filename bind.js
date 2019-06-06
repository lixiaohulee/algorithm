/**
 * @file bind.js
 * @author lixiaohu(lixiaohu_neuq@163.com)
 */

/**
 * 实现函数的bind方法
 * bind会创建一个函数的实例，这个实例函数的this会绑定到传递bind函数第一个参数上
 * 剩下的若干参数将被**添加到**到函数的参数列表中的参数
 */
function bind(func, _this) {
    if (typeof func !== 'function') {
        throw new TypeError('func must be a function')
    }
    return function(...args) {
        return func.apply(_this, args)    //return的目的是有的函数可能会有返回值
    }
}

var name = 'yangtong'
function testFunc() {
    console.log(this.name)
    console.log(arguments)

    return this.name
}

var o = {
    name: 'hahhhhhh'
}

var newFunc = bind(testFunc, o)

console.log(newFunc === testFunc)

console.log(newFunc(345, 4545))
