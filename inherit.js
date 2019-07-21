/**
 * @file inherit.js
 */

/**
 * js中继承实现
 */

function Father(name) {
    this.name = name
}
Father.prototype.sayName = function() {
    console.log(this.name)
}

function Son(name) {
    this.name = name
}

//Son类型如果想要继承Father类型的sayName方法，那么就可以这样将Father类型
//的一个实例设置为Son的原型对象，从而利用沿着原型链查找属性的特点可以访问到这方法

Son.prototype = new Father('lee')

const s = new Son('lee1')

//查找sayName方法的过程： 
//s实例中没有 =》 s.[[__proto__]] =》new Father('lee')没有 =》new Father('lee').[[__proto__]] =》Father.prototype =》 找到了

s.sayName()