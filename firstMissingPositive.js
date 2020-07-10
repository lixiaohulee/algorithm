/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    nums.sort((pre, next) => {
        return pre - next
    })

    nums = nums.filter(num => num > 0)
    console.log(nums)

    let len = nums.length
    if (len === 0) return 1
    if (len === 1) return nums[0] > 1 ? 1 : ++nums[0] 

    let i = 0
    for (let i = 0; i < len; i++) {
        if (nums[i+1] !== undefined) {
            if (nums[i+1] - nums[i] <= 1) continue
            return ++nums[i]
        }
    }
    return ++nums[len -1]
};

console.log(firstMissingPositive([3,4,-1,1]))