/*
   Exercise: Pig Latin

   Translate the provided string to pig latin.
   Pig Latin takes the first consonant(or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
   If a word begins with a vowel you just add "way" to the end.

   Input strings are guaranteed to be English words in all lowercase.

   translatePigLatin("california") should return "aliforniacay".
   translatePigLatin("paragraphs") should return "aragraphspay".
   translatePigLatin("glove") should return "oveglay".
   translatePigLatin("algorithm") should return "algorithmway".
   translatePigLatin("eight") should return "eightway".
   Should handle words where the first vowel comes in the end of the word.
   Should handle words without vowels.

*/

/**
 * translate the provided string to pig latin
 * @param {string} str the string to be converted
 * @return {string} the converted string
 */
function translatePigLatin(str) {
	if(/^[aeiou]/.test(str)){
		return str.concat("way");
	} else {
		if(!/[aeiou]/g.test(str)){
			return str.concat("ay"); 
		} else {
		return str.replace(/([^aeiou]+)(\w+)/, "$2$1ay");
		}
	}
}

console.log(translatePigLatin("cconsonant"));
console.log(translatePigLatin("california"));
console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("eight"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("ppppth"));