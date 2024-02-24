
function fn(num) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(num * 2)
    }, 1000)
  })
}
function* gen() {
  const num1 = yield fn(1)
  console.log(num1) // 2
  const num2 = yield fn(num1)
  console.log(num2) // 4
  const num3 = yield fn(num2)
  console.log(num3) // 8
  return num3
}

function generatorToAsync (genFunc) {
  const gen = genFunc.apply(this, arguments);
  return function () {
    return new Promise((resolve, reject) => {
      
      const go = (propertyName, args) => {
        let res;

        try {
          res = gen[propertyName](args);
        } catch(err) {
          return reject(err);
        }

        const { value, done } = res;

        if (done) {
          return resolve(value);
        }

        return Promise.resolve(value).then(val => go('next', val)).catch(err => go('throw', err));
      }

      go('next');
    });
  }
}

generatorToAsync(gen)().then(console.log.bind(null, 'lee'));