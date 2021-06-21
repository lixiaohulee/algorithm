


//OOP

//一组策略类 

const PerformanceS = function() {};
PerformanceS.prototype.calculate = function(salary) {
  return salary * 4;
}

const PerformanceA = function() {};
PerformanceA.prototype.calculate = function(salary) {
  return salary * 3;
}

const PerformanceB = function() {};
PerformanceB.prototype.calculate = function(salary) {
  return salary * 2;
}


//Context 接受请求并委托请求
const Bonus = function() {
  this.salary = null;
  this.strategy = null;
}

Bonus.prototype.setSalary = function(salary) {
  this.salary = salary;
}

Bonus.prototype.setStrategy = function(strategy) {
  this.strategy = strategy;
}

Bonus.prototype.getBonus = function() {
  if (!this.strategy) {
    throw new Error('strategy is null');
  }
  return this.strategy.calculate(this.salary);
}

//start calculate 

const bonus = new Bonus();
bonus.setSalary(1000);
bonus.setStrategy(new PerformanceA());

console.log(bonus.getBonus());




//JavaScript

const strategies = {
  S: function(salary) {
    return salary * 4;
  },
  A: function(salary) {
    return salary * 3;
  },
  B: function(salary) {
    return salary * 2;
  }
}

const getBonus = function(level, salary) {
  return strategies && strategies[level] && strategies[level](salary);
} 



console.log(getBonus('B', 26000));


// 实际上在JavaScript中策略模式还能变成更简洁的这样 
// 一等函数对象的策略模式

function S(salary) {
  return salary * 4;
}

function A(salary) {
  return salary * 3;
}

function B(salary) {
  return salary * 2;
}


function calculateBonus(levelFunc, salary) {
  if (typeof levelFunc === 'function') {
    return levelFunc(salary);
  }
}


console.log(calculateBonus(B,26000));