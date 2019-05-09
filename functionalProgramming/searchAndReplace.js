function myReplace(str, before, after) {

	if(isCapitalized(before)){
		after = capitalize(after);
	}

  return str.replace(before, after);
}

function capitalize(word){
  return word.slice(0,1).toUpperCase().concat(word.slice(1,word.length));
}

function isCapitalized(word){
  return /^[A-Z]/.test(word);
}

myReplace("A quick brown fox jumped over the lazy dog", "Jumped", "leaped");