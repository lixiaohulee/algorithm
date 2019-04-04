/**
 * 
993. 数组划分 I
中文English
给一个有 2n 个整数的数组，你的任务是把这些整数分成 n 组，如(a1, b1)，(a2, b2)，...，(an, bn)。并且使得 i 从 1 到 n 的 min(ai, bi)之和尽可能的大。

样例
样例1:

输入: [1,4,3,2]
输出: 4
解释: n 是 2, 最大的数对和为 4 = min(1, 2) + min(3, 4).
样例 2:

输入: [5,6]
输出: 5
解释: n 是 1, 最大的数对和为 5 = min(5, 6) .
注意事项
n 是一个正整数，且范围为 [1, 10000].
数组中的元素范围为[-10000, 10000]。
 */


const minNum = arr => {
  if (!Array.isArray(arr)) {
      return
  }
  
  return arr.sort((pre, next) => pre - next)[0]
} 
const arrayPairSum = function (nums) {
  // Write your code here
  
  if (!Array.isArray(nums)) {
      return
  }
  
  if (nums.length === 2) {
      return minNum(nums)
  }
  
  nums.sort((pre, next) => pre - next)   //原数组排序  返回排序后的数组
  
  let index = 0
  let sum = 0
  while(index <= nums.length - 1) {
      sum += nums[index]
      index += 2
  }
  
  return sum
}




const arr = [3,4,2,67,4,35,6,8,8,4,2,5,6,7]

console.log(arrayPairSum(arr))
