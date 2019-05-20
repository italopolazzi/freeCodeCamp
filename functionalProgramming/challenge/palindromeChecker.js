/*
   Exercise: Palindrome Checker
   
	Return true	if the given string is a palindrome. Otherwise, return false.

	A palindrome is a word or sentence that 's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

	Note
	You 'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

	We 'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

	We 'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
*/

/**
 * Test if the given string is a palindrome using an array of the halves of a cleared string
 * @param {string} str the string to be analized
 * @return {boolean} the result of the test
 */
function palindrome(str) {
	return divideTheString(clearTheString(str)).reduce((a, b) => a === b);
}

/**
 * Lowercases the string to better tests and removes special characters as such as * and _
 * @param {string} str the string  to be cleaned
 * @return {string} the string without special characters
 */
function clearTheString(str) {
	return str.replace(/[\W|_]/g, "").toLowerCase();
}

/**
 * Divides the string in two parts with the second half reversed and ignoring the middle char (in case of odd strings)
 * @param {string} str to be divided 
 * @return {Array<string>} the halves of a string
 */
function divideTheString(str) {
	let len = str.length;
	return [str.slice(0, Math.floor(len / 2)), reverseTheString(str.slice(Math.round(len / 2), len))]
}

/**
 * Splits the string to be converted as an array and use the reserve method, then join the array
 * @param {string} str to be reversed
 * @return {string} the reversed string
 */
function reverseTheString(str) {
	return str.split('').reverse().join('')
}

console.log(palindrome("2_A3*aba3#A2")); // should return true.
console.log(palindrome("eye")); // should return a boolean.
console.log(palindrome("eye")); // should return true.
console.log(palindrome("_eye")); // should return true.
console.log(palindrome("race car")); // should return true.
console.log(palindrome("not a palindrome")); // should return false.
console.log(palindrome("A man, a plan, a canal. Panama")); // should return true.
console.log(palindrome("never odd or even")); // should return true.
console.log(palindrome("nope")); // should return false.
console.log(palindrome("almostomla")); // should return false.
console.log(palindrome("My age is 0, 0 si ega ym.")); // should return true.
console.log(palindrome("1 eye for of 1 eye.")); // should return false.
console.log(palindrome("0_0 (: /-\ :) 0-0")); // should return true.
console.log(palindrome("five|\_/|four")); // should return false.