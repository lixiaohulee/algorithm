


function binarySearch(target, arr) {
  let left = 0;
  let right = arr.length - 1;
  
  while(left <= right) {
    let mid = parseInt((left + right) / 2, 10);

    if (target === arr[mid]) return mid;
    if (target < arr[mid]) {
      right = mid - 1;
    }
    if (target > arr[mid]) {
      left = mid + 1;
    }
  }n 

  return -1;
}


let arr = [1,2,3,4,5,6,7,8,9];
console.log(binarySearch(9, arr));
