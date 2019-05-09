function sumFibs(num) {
  return filterOddFibs(generateFibs(num)).reduce((a, b) => a + b);
}

function isOdd(num) {
  return num % 2 != 0
}

function filterOddFibs(arr) {
  return arr.filter(num => isOdd(num));
}

function fib(num) {
  return num == 0 ? 0 : num == 1 ? 1 : fib(num - 1) + fib(num - 2);
}

function generateFibs(num) {
  return [...Array(num).keys()].map(item => fib(item + 1));
}

sumFibs(5);