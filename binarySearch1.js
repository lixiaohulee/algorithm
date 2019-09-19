





/**
 * 二分查找的另一种实现
 * 
 */


function binarySearch(arr, target) {
    const len = Array.isArray(arr) ? arr.length : 0
    if (len === 0) {
        return -1
    }

    let left = 0
    let right = len - 1

    while(left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (target > arr[mid]) {
            left = mid + 1
        }else if (target < arr[mid]) {
            right = mid - 1
        }else {
            return mid
        }
    }
    return -1
}

const arr = [1,2,3,4,5,6,7]

console.log(binarySearch(arr, 7))