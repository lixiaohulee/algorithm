// const bubbleSort = (arr: number[]): number[] => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - i; j++) {
//       if (arr[j] > arr[j+1]) {
//         const temp = arr[j+1];
//         arr[j+1] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// }
// const arr = [1,4,54,56,4,34,3];
// bubbleSort(arr);
// console.log(arr);
// const insertSort = (arr: number[]): number[] => {
//   let sortedIndex = 0;
//   while (sortedIndex < arr.length - 1) {
//     for (let i = sortedIndex + 1; i > 0; i--) {
//       if (arr[i] < arr[i - 1]) {
//         const temp = arr[i];
//         arr[i] = arr[i - 1];
//         arr[i - 1] = temp;
//       } else {
//         break;
//       }
//     }
//     sortedIndex++;
//   }
//   return arr;
// }
// console.log(insertSort([1,4,54,56,4,34,3]));
// const selectSort = (arr: number[]): number[] => {
//   let sortedIndex = 0; 
//   while (sortedIndex < arr.length) {
//     let minIndex = sortedIndex;
//     for (let i = sortedIndex + 1; i < arr.length; i++) {
//       if (arr[minIndex] > arr[i]) {
//         minIndex = i;
//       }
//     }
//     const temp = arr[sortedIndex];
//     arr[sortedIndex] = arr[minIndex];
//     arr[minIndex] = temp;
//     sortedIndex++;
//   }
//   return arr;
// }
// console.log(selectSort([1,4,54,56,4,34,3]))
var quickSort = function (arr) {
    var _quickSort = function (arr, left, right) {
        if (left > right) {
            return;
        }
        var _left = left;
        var _right = right;
        var pivot = arr[_left];
        while (_left < _right) {
            while (_left < _right && arr[_right] >= pivot) {
                _right--;
            }
            arr[_left] = arr[_right];
            while (_left < _right && arr[_left] <= pivot) {
                _left++;
            }
            arr[_right] = arr[_left];
        }
        arr[_left] = pivot;
        _quickSort(arr, left, _left - 1);
        _quickSort(arr, _left + 1, right);
    };
    _quickSort(arr, 0, arr.length - 1);
    return arr;
};
console.log(quickSort([1, 4, 54, 56, 4, 34, 3]));
// const merge = (arr1: number[], arr2: number[]): number[] => {
//   let i = 0; 
//   let j = 0;
//   const res: number[] = [];
//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] === arr2[j]) {
//       res.push(arr1[i],arr2[j]);
//       i++;
//       j++;
//     }
//     if (arr1[i] < arr2[j]) {
//       res.push(arr1[i]);
//       i++;
//     } else {
//       res.push(arr2[j]);
//       j++;
//     }
//   }
//   while (i < arr1.length) {
//     res.push(arr1[i]);
//     i++;
//   }
//   while (j < arr2.length) {
//     res.push(arr2[j]);
//     j++;
//   }
//   return res;
// }
// const mergeSort = (arr: number[]): number[] => {
//   if (arr.length <= 1) {
//     return arr;
//   }
//   const mid = Math.floor(arr.length / 2);
//   const left = mergeSort(arr.slice(0, mid));
//   const right = mergeSort(arr.slice(mid));
//   return merge(left, right);
// }
// console.log(mergeSort([1,4,54,56,4,34,3]));
