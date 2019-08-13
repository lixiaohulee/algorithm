

/**
 * 闭包
 */

function closure(firstname) {
    return function () {
        const lastname = 'li'
        console.log(lastname + firstname)
    }
}

const sayName = closure('xiaohu')  //sayName现在是一个闭包

sayName()

sayName = null  //解除匿名函数的引用，释放闭包带来的内存占用


