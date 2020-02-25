






class Super {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    sayName() {
        console.log(this.name)
        console.log(this.age)
    }

    // static sayAge() {
    //     this.sayName()
    // }
}


function func() {}





console.log(Object.prototype.toString.call(true))



const s = new Super('lixiaohu', 222)

s.sayName()
// s.sayAge()
// Super.sayAge()

console.log(Super === Super.prototype.constructor)
console.log(Super.prototype)