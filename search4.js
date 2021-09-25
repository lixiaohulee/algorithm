function search(nums, target) {
  const theSortedArr = [];

  for (let i = 0, j = nums.length - 1; i <= j; i++, j--) {
      if (i === j) {
          theSortedArr.push(nums[i]);
      } else {
          theSortedArr.unshift(nums[j]);
          theSortedArr.push(nums[i]);
      }
  }

  console.log(theSortedArr);


  let left = 0;
  let right = theSortedArr.length - 1;

  while(left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (theSortedArr[mid] === target) return mid;

      if (target < theSortedArr[mid]) {
          right = mid - 1;
      }

      if (target > theSortedArr[mid]) {
          left = mid + 1;
      }
  }

  return -1;
}; 

const arr = [4,5,6,7,0,1,2]
const target = 0;

console.log(search(arr, target));