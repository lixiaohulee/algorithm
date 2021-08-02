


class Center {
  listeners = [];

  register(listerner) {
    this.listeners.push(listerner);
  }

  ready() {
    setTimeout(() => {
      this.listeners.forEach(listerner => listerner.callback());
    }, 2000);
  }
}

class A {
  callback() {
    console.log('a');
  }
}

class B {
  callback() {
    console.log('b');
  }
}

const c = new Center();

c.register(new A());

c.register(new B());


c.ready();