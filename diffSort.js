





const sort = (postion, length, arr) => {
    if(Array.isArray(arr)) {
        arr.map(item => {
            const obj = Object.create(null)

            obj.value = item
            obj.sonVal = []

            let index = 1
            while(index <= item) {
                if(item % index === 0) {
                    obj.sonVal.push(index)
                    index++
                } 
            }

            return obj
        })
        
        arr.sort((pre, next) => {
            const preLen = pre.sonVal.length
            const nextLen = next.sonVal.length

            if (preLen !== nextLen) {
                return preLen - nextLen
            }

            return pre.value - next.value
        })


        return arr[postion].value
    }
}


const postion = 4
const length = 6
const arr = [1,2,3,4,5,6]

console.log(sort(postion, length, arr))
