

/**
 * 二分查找
 * 
 * @param {Array} arr待查找数组
 * @param {Number} low数组起始下标
 * @param {Number} high数组结尾下标
 * @param {Number} target 目标元素
 * @returns {Number} 查找结果
 */

function binarySearch(arr, low, high, target) {
    if (!Array.isArray(arr) || typeof low !== 'number' || typeof high !== 'number' || typeof target !== 'number') {
        return
    }

    if (low > high) {
        return -1
    }

    let mid = Math.floor((low + high) / 2)
    if (arr[mid] > target) {

        return binarySearch(arr, low, mid - 1, target)
    }else if (arr[mid] < target) {

        return binarySearch(arr, mid + 1, high, target)
    }else{

        return mid
    }
} 


const arr = [1,2,3,4,5,7,8,9]
console.log(binarySearch(arr, 0, arr.length - 1, 4))