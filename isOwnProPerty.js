/**
 * @file isOwnProperty.js
 */



/**
 * 判断一个对象属性是属于实例还是属性原型对象
 * @returns {Boolean} true代表在实例中 false代表在原型中
 */

function isOwnProperty(target, property) {
    if (property in target) {
        return target.hasOwnProperty(property)
    }
}