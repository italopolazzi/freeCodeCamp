/*
  Exercise: Sum All Primes

  Sum all the prime numbers up to and including the provided number.

  A prime number is defined as a number greater than one and having only two divisors, one and itself.For example,
  2 is a prime number because it 's only divisible by one and two.

  The provided number may not be a prime.
*/

/**
 * Sum all the prime numbers up to and including the provided number.
 * @param {number} num the base number to generate the smaller numbers than it and are Positive Prime Numbers
 * @return {number} the sum all the prime numbers
 */
function sumPrimes(num) {
  return generatePrimes(num).reduce((a, b) => a + b);
}

/**
 * Test if a number is prime
 * @param {number} num the number to be tested
 * @return {number|boolean} the result of the test which if false will return the boolean false and if true will return the prime number 
 */
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }
  return num;
}

/**
 * Generate positive prime numbers up to a number
 * @param {number} num the number
 * @return {Array<number>} an array filled with the positive prime numbers limited up to the number passed as argument
 */
function generatePrimes(num) {
  return [...Array(num + 1).keys()].filter(item => isPrime(item));
}

console.log(sumPrimes(10));
console.log(sumPrimes(100));
console.log(sumPrimes(500));
console.log(sumPrimes(977));