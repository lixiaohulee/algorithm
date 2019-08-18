



/**
 * 在js中声明私有变量和私有函数的方式
 * 
 */

(function () {
    var privateVariable = 10
    function privateFunction() {
        console.log(privateVariable)
    }

    global.MyObject = function() {}   //这里本可以在非严格模式下利用没变量声明关键字的方式达到MyObject定义在全局

    MyObject.prototype.publicMehtod = function() {
        privateVariable++
        privateFunction()
    }
        
})()

const o =  new MyObject()

o.publicMehtod()