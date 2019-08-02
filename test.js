const person = {
    name: 'lee',
    colors: [1,2,3]
}


const o = Object.create(person, {
    age: {
        configurable: true,
        writable: true,
        enumerable: true,
        value: 3333
    }
})
console.log(o.age)