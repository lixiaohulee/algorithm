




/**
 * 快速排序
 * @param {Array}
 * @returns {Array}
 */

function quickSort(arr) {
    if(!Array.isArray(arr)) {
        throw new TypeError('arr type error')
    }
    if (arr.length <= 1) {
        return arr
    }

    let left = [],
        right = [],
        key = arr.splice(0, 1)[0]
    
    arr.forEach(item => {
        item > key 
            ? right.push(item)
            : left.push(item)
    })

    return quickSort(left).concat([key], quickSort(right))
}


const arr = [8,7,56,54,4,3,3]
console.log(quickSort(arr))