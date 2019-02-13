/**
 * @file quickSort.js
 * @author lixiaohu(lixiaohu_neuq@163.com)
 */



/**
 * 快速排序函数
 * @param {Array} 需要排序的数据数组
 * 
 */

function quickSort(pendingSortArr, _left, _right) {

    if (Object.prototype.toString.call(pendingSortArr) !== '[object Array]') {

        throw new TypeError('pendingSortArr must be an array')
    }

    if (typeof _left !== 'number' || typeof _right !== 'number') {
        
        throw new TypeError('_left of _right must be a number')
    }

    //数组为空或者只有个元素直接返回 无需排序
    if (_left === _right) {
        
        return pendingSortArr
    }

    if (_left < _right) {

        let left = _left
        let right = _right
        //基准值为第一个数组元素
        const key = pendingSortArr[_left]


        while(left < right) {
            
            while(left < right && pendingSortArr[right] > key) {
                right--
            }
            //找到了小于基准值的值 用它去填前面挖的坑 
            if (left < right) {
                pendingSortArr[left] = pendingSortArr[right]

                left++
            }

            while(left < right && pendingSortArr[left] < key) {
                left++
            }
            //找到大于基准值的值 用它去填后面挖的坑
            if (left < right) {
                pendingSortArr[right] = pendingSortArr[left]

                right--
            }
        }

        //当left 和 right相遇时 他们相等了 这时用基准元素补位
        pendingSortArr[left] = key

        quickSort(pendingSortArr, _left, left - 1)
        quickSort(pendingSortArr, left + 1, _right)
    }
}


const arr = [9,8,7,6,5,4]

quickSort(arr, 0, arr.length - 1)








