





const mergeSort = arr => {
    const middleIndex = parseInt(arr.length / 2,10)

    const arr1 = arr.slice(0, middleIndex)
    const arr2 = arr.slice(middleIndex)

    const res = []

    for(let i = 0; i <= arr1.length - 1; i++) {
        for(let j = 0; j <= arr2.length - 1; j++) {
            if (arr1[i] < arr2[j]) {
                res.push(arr1[i])
                break
            }else {
                res.push(arr2[j])
            }
        }
    }
}







































