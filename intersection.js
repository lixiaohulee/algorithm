/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const deleteDoubles = arr => {
    let res = []
    let i = 0
    while(i < arr.length) {
        if (res.indexOf(arr[i]) === -1) {
            res.push(arr[i])
        }
        i++
    }

    return res
}
var intersection = function(nums1, nums2) {

    nums1 = deleteDoubles(nums1)
    nums2 = deleteDoubles(nums2)

    let res = []

    for(let i = 0; i < nums1.length; i++) {
        for(let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) {
                res.push(nums1[i])
                nums2.splice(j,1)
            }
        }
    }

    return res 

};