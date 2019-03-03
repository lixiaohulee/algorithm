/**
 * @param n: the number
 * @return: the rank of the number
 */
 
const isAPrime = function(n) {
  if (typeof n !== 'number') {
      throw new TypeError('expected a number')
  }

  if (n < 2) {
    throw new Error('a prime number must be greater than 1')
  }
  
  let index = 1
  while(n - index > 1) {
      if (n % (n - index) === 0) {
          return false
      }
      index++
  }
  return true
}
const kthPrime = function (n) {
  // write your code here
  if (typeof n !== 'number') {
      throw new TypeError('expected a number')
  }
  
  const primeArr = []
  let index = 2
  while(index <= n) {
      isAPrime(index)
        ? primeArr.push(index)
        : null
      index++
  }
  console.log(primeArr)
  
  return primeArr.findIndex(prime => prime === n) + 1
}

const prime = 63527
console.log(kthPrime(prime))