






const getAverage = arr => {
  if(!Array.isArray(arr)) {
      return 
  }
  
  const len = arr.length
  let sum = 0
  arr.forEach((item, index) => sum += item)
  
  return sum / len
}
const findMaxAverage = function (nums, k) {
  // Write your code here
  
  if (!Array.isArray(nums) || typeof k !== 'number') {
      return new TypeError('arguments type error')
  }
  
  const len = nums.length
  if(k > len) {
      return 
  }
  
  let index = 0
  let res = []

  
  while(index+k-1 <= len-1) {
      const subArray = nums.slice(index, index+k)
      console.log(subArray)
      res.push(getAverage(subArray))
      
      index++
  }
  
  return res.sort((pre, next) => pre - next)[res.length - 1]
}


const arr = [7,4,5,8,8,3,9,8,7,6]
const key = 7

console.log(findMaxAverage(arr, key))