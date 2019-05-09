function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }
  return num;
}

function generatePrimes(num) {
  return [...Array(num + 1).keys()].filter(item => isPrime(item));
}

function sumPrimes(num) {
  return generatePrimes(num).reduce((a, b) => a + b);
}

console.log(sumPrimes(10));
console.log(sumPrimes(100));
console.log(sumPrimes(500));
console.log(sumPrimes(977));