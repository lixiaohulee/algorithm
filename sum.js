


const sum = (arr, start) => {
    if (start === arr.length -1) {
        return arr[start]
    }
    return  arr[start] + sum(arr, start + 1)
}

const arr = [1,2,3,4,5]

console.log(sum(arr, 0))