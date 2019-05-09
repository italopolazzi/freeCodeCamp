/*
  Exercise: Sum All Odd Fibonacci Numbers

	Given a positive integer num,
	return the sum of all odd Fibonacci numbers that are less than or equal to num.

	The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers.The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

	For example, sumFibs(10) should
	return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/

/**
 * Return the sum of all odd Fibonacci numbers that are less than or equal to num
 * @param {number} num the max number who will be used to generate the fib numbers less or equal to this
 * @return {number} the sum of all odd's fib numbers
 */
function sumFibs(num) {
  return filterOddFibs(generateFibs(num)).reduce((a, b) => a + b);
}

/**
 * Test if a number is odd
 * @param {number} num the number to be tested
 * @return {boolean} the result of the test
 */
function isOdd(num) {
  return num % 2 != 0
}

/**
 * Return a array filtered with just the fib numbers which are odd numbers
 * @param {Array} arr the original array which may contain both odd and even numbers
 * @return {Array} the array filtered by odd numbers
 */
function filterOddFibs(arr) {
  return arr.filter(num => isOdd(num));
}

/**
 * Return the fib number 
 * @param {number} num the base number to the calculation
 * @return {number} the result of the fib calculation
 */
function fib(num) {
  return num == 0 ? 0 : num == 1 ? 1 : fib(num - 1) + fib(num - 2);
}

/**
 * Generate an array with the fibonacci sequence
 * @param {number} num the limit number to the fib function
 * @return {Array} the array filled with the fib sequence
 */
function generateFibs(num) {
  return [...Array(num).keys()].map(item => fib(item + 1));
}

sumFibs(5);