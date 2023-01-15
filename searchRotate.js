function search(nums, target) {
    var rotateIndex = -1;
    for (var i = 0; i < nums.length; i++) {
        if (undefined !== nums[i + 1] && nums[i] > nums[i + 1]) {
            rotateIndex = i;
            break;
        }
    }
    console.log(rotateIndex);
    if (rotateIndex === -1)
        return -1;
    var half = nums.slice(0, rotateIndex + 1);
    var anotherHalf = nums.slice(rotateIndex + 1);
    console.log(half, anotherHalf);
    var halfRes = binarySearch11(half, target);
    if (halfRes === -1)
        return halfRes;
    return binarySearch(anotherHalf, target);
}
;
function binarySearch11(nums, target) {
    var left = 0;
    var right = nums.length - 1;
    while (left <= right) {
        var mid = parseInt(((left + right) / 2).toString(), 10);
        if (nums[mid] === target)
            return mid;
        if (target < nums[mid]) {
            right = mid - 1;
        }
        if (target > nums[mid]) {
            left = mid + 1;
        }
    }
    return -1;
}
