/**
 * @file insertSort.js
 * @author lixiaohu(lixiaohu_neuq@163.com)
 */


/**
 * 插入排序
 * @param {Array} 带排序数组
 */

function insertSort(arr) {
    if (!Array.isArray(arr)) {
        return 
    }

    if (arr.length <= 1) {
        return arr
    }

    for (let i = 1; i <= arr.length - 1; i++) {
        for (let j = i; j >= 0; j--) {
            if (arr[j] < arr[j-1]) {
                let temp = arr[j - 1]
                arr[j - 1] = arr[j]
                arr[j] = temp
            }
        }
    }
}

let arr = [9,8,7,6,5,4,3,2]

insertSort(arr)

console.log(arr)


console.log('hello world ')









