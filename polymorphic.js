


const makeSound = (animal) => {
  if (animal) {
    animal.sound();
  }
}

const Dog = function() {}
Dog.prototype.sound = () => console.log('wang wang wang!!!');


const Cat = function() {}

Cat.prototype.sound = () => console.log('mou mou mou');


makeSound(new Dog());


makeSound(new Cat());




