/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

const merge = (arr1, arr2) => {
    let i = 0,
        j = 0,
        res = []

    while(i <= arr1.length - 1 && j <= arr2.length - 1) {
        if (arr1[i] < arr2[j]) {
            res.push(arr1[i])
            i++
        }else {
            res.push(arr2[j])
            j++
        }
    }

    while(i < arr1.length) {
        res.push(arr1[i])
        i++
    }

    while(j <  arr2.length) {
        res.push(arr2[j])
        j++
    }

    return res
}

var findMedianSortedArrays = function(nums1, nums2) {
    const res = merge(nums1, nums2)

    if (res.length % 2 === 0) {
        let mid = res.length / 2 
        return (res[mid] + res[mid -1]) / 2
    }else {
        let mid = Math.floor(res.length / 2)
        return res[mid]
    }
};

console.log