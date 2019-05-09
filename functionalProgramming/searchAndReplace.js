/*
   Exercise: Search and Replace

  Perform a search and replace on the sentence using the arguments provided and
  return the new sentence.

  First argument is the sentence to perform the search and replace on.

  Second argument is the word that you will be replacing(before).

  Third argument is what you will be replacing the second argument with(after).

  Note
  Preserve the case ofthe first character in the original word when you are replacing it.
  For exampleif you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

*/

/**
 * Perform a search and replace on the sentence using the arguments provided
 * @param {string} str the string to be replaced
 * @param {string} before the value to be searched and replaced
 * @param {string} after the value to replace
 * @return {string} the replaced string
 */
function myReplace(str, before, after) {
  if (isCapitalized(before)) {
    after = capitalize(after);
  }

  return str.replace(before, after);
}

/**
 * Capitalize a word
 * @param {string} word the word to be capitalized
 * @return {string} the capitalized word
 */
function capitalize(word) {
  return word.slice(0, 1).toUpperCase().concat(word.slice(1, word.length));
}

/**
 * Test if a word is capitalized
 * @param {string} word the word to be tested
 * @return {boolean} the result for the test
 */
function isCapitalized(word) {
  return /^[A-Z]/.test(word);
}

myReplace("A quick brown fox jumped over the lazy dog", "Jumped", "leaped");