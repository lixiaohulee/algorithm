


/**
 * js中的递归的方法的正确的使用姿势
 * 
 * 利用函数表达式的方式实现，这里要注意利用函数本身的指针
 * argument.callee有问题，argument.callee这个属性的会在严格模式下访问报错
 */


const func = function f(num) {
    if (num <= 1) {
        return 1
    }else {
        return num * f(num - 1)
    }
}

const res = func(4)
console.log(res)


