const decode = (pos, str, operator) => String.fromCharCode(str.charCodeAt(pos) + (operator * ROT_13))

const abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const center = abc.length / 2
const stPart = abc.slice(0, center)
const ndPart = abc.slice(center, abc.length)

const FIRST_PART_OPERATOR = 1
const SECOND_PART_OPERATOR = -1
const NEUTRAL_OPERATOR = 0
const ROT_13 = 13

function isInFirstPart(letter) {
	return stPart.indexOf(letter) != -1
}

function isInSecondtPart(letter) {
	return ndPart.indexOf(letter) != -1
}

function rot13(str) { // LBH QVQ VG!
	let str_decoded = ""
	for (let i in str) {
		if (isInFirstPart(str[i])) {
			str_decoded += decode(i, str, FIRST_PART_OPERATOR)
		} else if (isInSecondtPart(str[i])) {
			str_decoded += decode(i, str, SECOND_PART_OPERATOR)
		} else {
			str_decoded += decode(i, str, NEUTRAL_OPERATOR)
		}
	}
	return str_decoded
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"))
console.log(rot13("ABCDEFGHIJKLMNOPQRSTUVWXYZ"))
console.log(rot13("LBH QVQ VG!"))