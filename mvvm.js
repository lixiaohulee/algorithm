function observe(data) {
    if (!data && typeof data !== 'object') return

    Object.keys(data).forEach(key => {
        defineReactive(data, key, data[key])
    })
}

function defineReactive(data, key, value) {
    observe(value)
    Object.defineProperty(data, key, {
        configurable: false,
        enumerable: true,
        get() {
            return value
        },
        set(newValue) {
            console.log('hello data changed')
            value = newValue
        }
    })
}

// function 
let data = {
    name: 'lixiaohu',
    age: 333
}

observe(data)
data.name = 'afdasdf'


