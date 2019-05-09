/*
   Exercise: Diff Two Arrays
   
   Compare two arrays and
   return a new array with any items only found in one of the two given arrays, but not both.In other words,
     return the symmetric difference of the two arrays.

   Remember to use Read - Search - Ask
   if you get stuck.Try to pair program.Write your own code.

   Note:
   You can return the array with its elements in any order.
*/

/**
 * Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
 * @param {Array<number>} arr1 
 * @param {Array<number>} arr2 
 * @return {Array<any>} the symmetric difference of the two arrays
 */
function diffArray(arr1, arr2) {
  var newArr = [];
  
  let arrays = [arr1, arr2];
  
  arrays.sort((a,b)=> a.length < b.length);
  
  arrays[0].forEach(item => arrays[1].indexOf(item) == -1 ? newArr.push(item) : "")
  arrays[1].forEach(item => arrays[0].indexOf(item) == -1 ? newArr.push(item) : "")

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);