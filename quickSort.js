/**
 * @file quickSort.js
 * @author lixiaohu(lixiaohu_neuq@163.com)
 */


/**
 * 快速排序函数
 * 
 * @param {Array} 待排序数组
 * @param {Number} 数组下标0
 * @param {Number} 数组尾部下标
 */


function quickSort(arr, _left, _right) {
    if (!Array.isArray(arr) || arr.length <= 1) {
        return arr
    }

    if (typeof _left !== 'number' || typeof _right !== 'number') {
        throw new TypeError('_left or _right must be a number')
    }

    if (_left < _right) {
        let left = _left, 
            right = _right,
            key = arr[left]

        while(left < right) {
            while(left < right && arr[right] >= key) {
                right--
            }
            if (left < right) {
                arr[left] = arr[right]
                left++
            }
            while(left < right && arr[left] <= key) {
                left++
            }
            if(left < right) {
                arr[right] = arr[left]
                right--
            }
        }
        arr[left] = key
        quickSort(arr,_left, left - 1)
        quickSort(arr,right+1, _right)
    }
}



const arr = [1,2,4,58,3,2,2,1,1,3,4,]

quickSort(arr, 0, arr.length - 1)
console.log(arr)








