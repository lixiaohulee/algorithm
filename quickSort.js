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

function quickSort(arr, _left = 0, _right) {

    //判参数合法性
    if (!Array.isArray(arr) || typeof _left !== 'number' || typeof _right !== 'number') {
        
        throw Error('arguments type error')
    }

    //数组为空或者只有一个元素
    if (arr.length <= 1) {
        
        return arr
    }

    if (_left < _right) {

        let left = _left,
            right = _right,
            key = arr[_left]

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
            if (left < right) {
                arr[right] = arr[left]
                right--
            }

        }
        arr[left] = key

        quickSort(arr, _left, left - 1)
        quickSort(arr, left + 1, _right)
    }
}


const arr = []

quickSort(arr, 0, arr.length - 1)

console.log(arr.length - 1)








