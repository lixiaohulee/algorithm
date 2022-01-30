function sortArray(nums) {
  partition(nums, 0, nums.length -1);

};

const partition = (nums, _left, _right) => {
  let left = _left;
  let right = _right;

  const reference = nums[left];

  if (left < right) {
      while(left < right) {
          while(left < right && nums[right] >= reference) {
              right--;
          }
          nums[left] = nums[right];

          while(left < right && nums[left] <= reference) {
              left++;
          }
          nums[right] = nums[left];
      }
      nums[left] = reference;
      partition(nums, 0, left-1);
      partition(nums, left+1, _right);
  }
 
}


const arr = [5,3,566,23,57,35,7,7,3,4,6,6,8,3,3];
sortArray(arr);

console.log(arr.toString());

