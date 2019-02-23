




/**
 * bubbleSort
 * 
 */
function bubbleSort(arr) {
    if (!Array.isArray(arr)) {
        return
    }
    if (arr.length <= 1) {
        return arr
    }
    for (let i = 0; i <= arr.length; i++) {
        for(let j = 0; j <= arr.length - i; j++) {
            if (arr[j+1] < arr[j]) {
                let temp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = temp
            }
        }
    }
}


const arr = [9,7,6,4,3,2,6,6464,563,2,3453,4,56,57,57]
bubbleSort(arr)
console.log(arr)