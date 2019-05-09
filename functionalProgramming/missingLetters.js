const abc = 'abcdefghijklmnopqrstuvwxyz'

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
