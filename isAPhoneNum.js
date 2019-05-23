





/**
 * 检验传入的数值是否是一个合法的手机号
 */


function isAPhoneNum(phoneNum) {
    phoneNum = +phoneNum
    if (isNaN(phoneNum)) {
        throw new Error('phoneNum type error need a number')
    }

    const pattern = /^1(3|4|5|7|8)\d{9}$/

    return pattern.test(phoneNum)
}


console.log(isAPhoneNum(11033332122))