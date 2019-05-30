





/**
 * 获取URL查询字符串
 * @param {String} url
 * @returns {Object} 
 */

function getQuery(url) {
    if (typeof url !== 'string') {
        throw new TypeError('url must be a string')
    }

    let urlObj = Object.create(null)
    url.split('?')[1].split('&').forEach(item => {
        item = item.split('=')
        urlObj[item[0]] = item[1]
    })

    return urlObj
}

const url = 'https://www.baidu.com?name=lee&age=343'

console.log(getQuery(url))