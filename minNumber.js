/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function(nums) {
    nums = nums.join('').split('').sort((pre, next) => {
        return +pre - (+next)
    })

    console.log(nums)
    if (+nums[0] === 0) {
        const cur = nums[0]
        nums[0] = nums[1]
        nums[1] = cur
    }

    return +(nums.join(''))
};


const arr = [10,2]
console.log(minNumber(arr))