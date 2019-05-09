  /*
  Exercise: DNA Pairing

  The DNA strand is missing the pairing element.Take each character, get its pair, and
  return the results as a 2 d array.

  Base pairs are a pair of AT and CG.Match the missing element to the provided character.

  Return the provided character as the first element in each array.

  For example, for the input GCG,
  return [
    ["G", "C"],
    ["C", "G"],
    ["G", "C"]
  ]

  The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

*/

  const DNA_PAIRING = {
    "G": "C",
    "C": "G",
    "T": "A",
    "A": "T"
  }
  Object.freeze(DNA_PAIRING);


  /**
   * Does the pairing for each element of the DNA
   * @param {string} str the DNA strand to be paired
   * @return {Array<array>} 2D array in which each index is a pair DNA
   */
  function pairElement(str) {
    const arrBase = str.split('');
    return arrBase.map(item => [item, DNA_PAIRING[item]]);
  }

  pairElement("GCG");
  pairElement("GCGTA");