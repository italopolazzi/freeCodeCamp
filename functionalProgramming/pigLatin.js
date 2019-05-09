
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