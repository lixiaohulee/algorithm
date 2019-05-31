/**
 * 删除字段chuanchuan
 */


function deleteBlankSpace(str) {
    if (typeof str !== 'string') {
        throw new TypeError('str must be a string')
    }

    const reg = /\s/g
    return str.replace(reg, '')
}


const url = 'as d  f as d  f as   dssada f'

console.log(deleteBlankSpace(url))