
/*
  Exercise: Convert HTML Entities

	Convert the characters & , < , > , " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

/**
 * Returns a escaped equivalent sequence for a HTML entity or by default the character
 * @param {string} entity the character to be espaped
 * @return {string} the equivalent sequence by default the character
 */
function getEntity(entity) {
  switch (entity) {
    case '<':
      return '&lt;';
    case '&':
      return '&amp;';
    case '>':
      return '&gt;';
    case '"':
      return '&quot;';
    case "'":
      return "&apos;";
    default:
      return entity;
  }
}

/**
 * Convert the characters & , < , > , " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
 * @param {string} str the string which may contain some entities who needs to be escaped
 * @return {string} the escaped string
 */
function convertHTML(str) {
  let arr = str.split('');
  let newStr = "";
  arr.forEach(char => newStr += getEntity(char));
  return newStr;
}


console.log(convertHTML("Dolce & Gabbana"));