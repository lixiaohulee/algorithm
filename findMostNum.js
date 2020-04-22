






const arr = [1,2,2,3,4,5,5,6,6,6]
function findMost(arr) {
    let index = 0
    for(let i = 0, l = arr.length; i < l; i++) {
        if (undefined !== arr[i+1]) {
            if (arr[i] === arr[i+1]) {
                continue
            }else {
                index = i
            }
        }
    }

    return arr[index]
}

console.log(findMost(arr))