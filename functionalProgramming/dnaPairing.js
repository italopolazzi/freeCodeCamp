  const DNA_PAIRING = {
	  "G":"C",
	  "C":"G",
	  "T":"A",
	  "A":"T"
  }
  Object.freeze(DNA_PAIRING);

function pairElement(str) {
  const arrBase = str.split('');
  return arrBase.map(item => [item, DNA_PAIRING[item]]);
}

pairElement("GCG");
pairElement("GCGTA");