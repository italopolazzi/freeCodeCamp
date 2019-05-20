/*
	Exercise: Roman Numeral Converter
	Convert the given number into a roman numeral.

	All roman numerals answers should be provided in uppercase.
*/

function getOrdinalNumerals(number) {
	return number.toString().split('').reverse()
}

function convertToRoman(number){
	let romanNumeral = []
	let ord = getOrdinalNumerals(number)

	romanNumeral.unshift(resolveUnity(parseInt(ord[0])))
	romanNumeral.unshift(resolveTenth(parseInt(ord[1])))
	romanNumeral.unshift(resolveHundreth(parseInt(ord[2])))
	romanNumeral.unshift(resolveThousandth(parseInt(ord[3])))

	return romanNumeral.join('')
}

function resolveRomanNumeral(number, ...args){
	let the1 = args[0],
		the5 = args[1] || "",
		the10 = args[2] || "";

	switch (number) {
		case 1:
		case 2:
		case 3:
			return `${the1}`.repeat(number);
			break;
		case 4:
			return `${the1}${the5}`;
			break;
		case 5:
		case 6:
		case 7:
		case 8:
			return `${the5}${the1.repeat(number - 5)}`;
			break;
		case 9:
			return `${the1}${the10}`
			break;
	}	
}

function resolveUnity(number) {
	return resolveRomanNumeral(number, "I", "V", "X")
}

function resolveTenth(number) {
	return resolveRomanNumeral(number, "X", "L", "C")
}

function resolveHundreth(number) {
	return resolveRomanNumeral(number, "C", "D", "M")
}

function resolveThousandth(number) {
	return resolveRomanNumeral(number, "M")
}