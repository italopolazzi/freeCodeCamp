/*
   Exercise: Seek and Destroy

   Convert a string to spinal case. Spinal case is all lowercase words joined by dashes.

   spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
   spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
   spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
   spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
   spinalCase("AllThe-small Things") should return "all-the-small-things".

*/

/**
 * Convert a string to spinal case
 * @param {string} str the string to be converted
 * @return {string} the converted string
 */
function spinalCase(str) {

  return str.replace(/([0-9a-zA-Z])([A-Z])/g, "$1 $2").toLowerCase().split(/[^0-9a-zA-Z]/g).join('-');
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("thisIsSpinal<wbr>Tap"));
console.log(spinalCase("The_Andy_<wbr>Griffith_Show"));
console.log(spinalCase("AllThe-small Things"));

