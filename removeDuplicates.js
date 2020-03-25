/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0
    let len = nums.length 
    while(i < len) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i,1)
            i = 0
            len = nums.length
        }else {
            i++
        }
    }

    return nums
};


console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))



/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0
    let j = 1

    while(j < nums.length) {
        if (nums[i] !== nums[j]) {
            ++i
            nums[i] = nums[j]
            j++
            continue
        }
        j++
        
    }

    return i+1
};