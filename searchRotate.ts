function search(nums: number[], target: number): number {
  let rotateIndex = -1;
  for(let i = 0; i < nums.length; i++) {
      if (undefined !== nums[i+1] && nums[i] > nums[i+1]) {
          rotateIndex = i;
          break;
      }
  }

  console.log(rotateIndex)
  if (rotateIndex === -1) return -1;


  const half = nums.slice(0, rotateIndex + 1);
  const anotherHalf = nums.slice(rotateIndex + 1);

  console.log(half, anotherHalf)


  const halfRes = binarySearch11(half, target);

  if (halfRes === -1) return halfRes;

  return binarySearch(anotherHalf, target);
  
};

function binarySearch11(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  
  while(left <= right) {
      let mid = parseInt(((left + right) / 2).toString(), 10);
      
      if (nums[mid] === target) return mid;

      if (target < nums[mid]) {
          right = mid - 1;
      }

      if (target > nums[mid]) {
          left = mid + 1;
      }
  }

  return -1;
}