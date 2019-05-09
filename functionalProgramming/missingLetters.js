
/*
  Exercise: Missing letters

	Find the missing letter in the passed letter range and return it.

	If all letters are present in the range, return undefined.
*/

const abc = 'abcdefghijklmnopqrstuvwxyz'

/**
 * Find the missing letter in the passed letter range and return it.
 * @param {string} str the string with a range of lowercase letters
 * @return {string} the missing letter
 */
function fearNotLetter(str) {
	let ini = abc.indexOf(str[0]);
	let end = abc.indexOf(str[str.length-1]);

	for(let i = ini; i <= end; i++){
		if(abc[i] != str[i-ini]){
			return abc[i];
		}
	}
  return;
}

console.log(fearNotLetter("abcef"));
console.log(fearNotLetter("mnoqrs"));
console.log(fearNotLetter(abc));
