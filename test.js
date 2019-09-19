




function func(arr, target) {
    if(arr.length <= 0) return -1;
    else if(arr.length === 1) {
        return arr[0] === target ? 0 : -1;
    }else {
        let left = 0, right = arr.length - 1;
        while(left <= right) {
            let mid = Math.floor((right + left) / 2);
            if(arr[mid] < target) {
                left = mid + 1;
            }else if(arr[mid] > target) {
                right = mid  - 1;
            }else {
                return mid;
            }
        }
        return -1;
    }
}

const arr = [1,2,3,4,5]

console.log(func(arr, 5))