
/**
 * 根据时间戳计算剩余时间的小时和分钟
 * @param {Number} timestamp 
 * @returns {Object}
 */
function getRestTime(timestamp) {
    if(typeof timestamp !== 'number') {
        return new TypeError('timestamp must be a number')
    }

    const AN_HOUR = 1000 * 60 * 60
    const A_MINUTE = 1000 * 60 
    
    const restHour = parseInt(timestamp / AN_HOUR, 10) 
    const restMinute = parseInt(timestamp % AN_HOUR / A_MINUTE, 10)
    
    return {
        restHour,
        restMinute
    }
}

console.log(getRestTime(1000 * 60 * 60 * 4 + 1000 * 60 * 45))