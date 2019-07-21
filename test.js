







function Father(name) {
    this.name = name
    this.address = 'lee'
}

Father.prototype.sayName = function() {
    console.log(this.name)
}

function Son(name) {
    this.name = name
}

Son.prototype = new Father('a')

const s = new Son('b')

delete s.name


s.sayName()
console.log(s.address)