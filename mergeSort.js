



const merge = (left, right) => {
    let i = 0,
        j = 0,
        res = []

    while(i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            res.push(left[i])
            i++
        }else {
            res.push(right[j])
            j++
        }
    }

    while(i < left.length) {
        res.push(left[i])
        i++
    }

    while(j < right.length) {
        res.push(right[j])
        j++
    }

    return res
}

const mergeSort = (arr) => {
    if (arr.length === 1) return arr
    let mid = parseInt(arr.length / 2, 10)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))

    return merge(left, right)
}


let arr = [5,3,66,3,24,7,33,5,6,7]

console.log(mergeSort(arr))






































