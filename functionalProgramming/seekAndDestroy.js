/*
   Exercise: Seek and Destroy
   
   You will be provided with an initial array(the first argument in the destroyer
   function), followed by one or more arguments.Remove all elements from the initial array that are of the same value as these arguments.

   Note
   You have to use the arguments object.
*/

/**
 * Remove elements from a provided initial array
 * @param {Array<any>} args initial array followed by one or more argument to remove from the initial array
 * @return {Array<any>} the array without the elements
 */
function destroyer(...args) {
  let arr = args[0];
  let elems = args.slice(1, args.length);
  let newArray = arr.filter(item => elems.indexOf(item) == -1)
  return newArray;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);