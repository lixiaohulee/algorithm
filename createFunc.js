


/**
 * 闭包只能取得包含函数的任何变量的最后的一个值，
 * 另外要明白在js中函数参数是按照值穿参数的，即使是传递的是引用变量也是按照值传参数的
 * 引用类型实际上是复制的指针值到函数参数中的
 */

 function createFunc() {
     var result = []
     for(var i = 0; i <= 10; i++) {
         result[i] = function (){
             return i
         }
     }
     return result
 }

 console.log(createFunc()[0]())    //这里每一项都返回的是11原因就是闭包取得了包含函数任何变量的最后的一个值


 function createFunc1() {
     var result = []
     for(var i = 0; i <= 10; i++) {
         result[i] = (function(num) {
             return function (){
                 return num
             }
         })(i) //这里的关键点在于用到了函数传参数是按照值传递的，就是将i直接复制到匿名函数的一个局部变量，arguments对象的类数组的一个元素
     }
     return result
 }

console.log(createFunc1()[4]())