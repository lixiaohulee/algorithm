

const makeSound = function(animal) {
    if (animal instanceof Duck) {
        console.log('gagaga')
    } else if (animal instanceof Chicken) {
        console.log('gagaga')
    }
}

var Duck = function() {}
var Chicken = function() {}

makeSound(new Duck())
makeSound(new Chicken())

//上面是有问题的版本 

var makeSound = function(animal) {
    animal.sound();
}

var Duck = function() {}
Duck.prototype.sound = function() {
    console.log('gagaga')
}

var Dog = function() {}
Dog.prototype.sound = function() {
    console.log('gagaga')
}

makeSound(new Duck())
makeSound(new Chicken())