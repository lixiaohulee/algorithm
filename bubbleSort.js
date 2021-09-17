


const bubbleSort = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[i]) {
                const temp = arr[i];
                arr[i] = arr[j]
                arr[j] = temp;
            }
        }
    }

    return arr;
}


const arr = [5,3,6,278,23,8,3,5, 2,3,5,2,4,7,8,43,2,56,8,89,4,13,88];

console.log(bubbleSort(arr));