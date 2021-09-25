





const currying = function(func) {
    const args = [];
    return function() {
        if (arguments.length === 0) {
            return func.apply(this, args);
        } else {
            args.push(...arguments);
            return arguments.callee;
        }
    }
}

const cost = function() {
    let money = 0;
    for(let i = 0; i < arguments.length; i++) {
        money += arguments[i];
    }

    return money;
}

const curryiedCost = currying(cost);

console.log(curryiedCost(100));
curryiedCost(200)
console.log(curryiedCost(200));

curryiedCost();
console.log(curryiedCost());
console.log(curryiedCost());




Function.prototype.uncurrying = function() {
    let self = this;
    return function() {
        const obj = Array.prototype.shift.call(arguments);
        return self.apply(obj, arguments);
    }
}

const push = Array.prototype.push.uncurrying();

const arr = [1,3,3];

push(arr, 3222);


console.log(arr);