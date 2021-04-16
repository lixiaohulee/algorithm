


const mult = function() {
    let a = 1;
    for(let i = 0; i < arguments.length; i++) {
        a = a * arguments[i];
    }
    return a;
}

console.log(mult(1,2,3));


//with cache

const cache = {};
const mult2 = function() {
    const args = Array.prototype.join.call(arguments, ',');
    if (cache[args]) {
        return cache[args];
    }

    let a = 1;
    for(let i = 0; i < arguments.length; i++) {
        a = a * arguments[i];
    }

    return cache[args] = a;
}


//with cache with closure

const mult3 = (function() {
    const cache = {};
    return function() {
        const args = Array.prototype.join.call(arguments, ',');
        if (cache[args]) {
            return cache[args];
        }
        
        let a = 1;
        for(let i = 0; i <= arguments.length; i++) {
            a = a * arguments[i];
        }
        
        return cache[args] = a;
    }
})();

//with cache with closure with func
const mult1 = (function() {
    const cache = {};
    const calculate = function() {
        let a = 1;
        for(let i = 0; i < arguments.length; i++) {
            a = a * arguments[i];
        }
        return a;
    }

    return function() {
        const args = Array.prototype.join.call(arguments, ',');
        if (cache[args]) {
            return cache[args];
        }

        return cache[args] = calculate.apply(null, arguments);
    }
})();

console.log(mult1(1,2,3,4,5,6));