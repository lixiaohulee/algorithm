




const binarySearch = (arr, left, right, target) => {
  if (left > right) return -1;

  const mid = parseInt((left + right) / 2);

  if (arr[mid] === target) return mid;

  if (arr[mid] < target) return binarySearch(arr, mid+1, right, target);

  if (arr[mid] > target) return binarySearch(arr, 0, mid-1, target);
}

const arr = [0,1,2,3,4,5,6];


console.log(binarySearch(arr, 0, arr.length-1, 10));

