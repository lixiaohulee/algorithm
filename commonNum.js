/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var deleteRepeatNum = function(arr) {
    let res = []
    for(let i = 0, l = arr.length; i < l; i++) {
        if (res.indexOf(arr[i]) === -1) {
            res.push(arr[i])
        }
    }
    return res
}

var sortArr = function(arr) {
    return arr.sort(function(pre, next) {
        pre - next
    })
}
var intersection = function(nums1, nums2) {
    nums1 = deleteRepeatNum(nums1)
    nums2 = deleteRepeatNum(nums2)

    nums1 = sortArr(nums1)    
    nums2 = sortArr(nums2)

    let res = []
    
    nums1.forEach(num1 => {
        nums2.findIndex(num2 => num2 === num1) !== -1 
            ? res.push(num1)
            : null
    })

    return res
};
let nums1 = [1,2,2,1], nums2 = [2,2]

console.log(intersection(nums1, nums2))

console.log()
