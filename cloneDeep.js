


const cloneDeep = source => {
    //基本类型
    const baseTypes = ['string', 'number', 'undefined', 'boolean']
    if (baseTypes.includes(typeof source) || source === null) {
        return source
    }

    //复杂类型

    if(Array.isArray(source)) {
        const newArr = []

        source.forEach(item => {
            baseTypes.includes(typeof item)
                ? newArr.push(item)
                : newArr.push(cloneDeep(item))
        })
        return newArr
    }

    if(Object.prototype.toString.call(source) === '[object Object]') {
        const newObj = {}

        Object.keys(source).forEach(key => {
            baseTypes.includes(typeof source[key])
            ? newObj[key] = source[key]
            : newObj[key] = cloneDeep(source[key])
        })

        return newObj
    }
}


const source = {name: 'lee', age: 12, school: [1,3,4,5, {a: 'lee'}]}

console.log(cloneDeep(source))

console.log(source, cloneDeep(source), source === cloneDeep(source))