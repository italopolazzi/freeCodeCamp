/*
  Exercise: Sorted Union

	Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

	In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

	The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

	uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
	uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) should return [1, 3, 2, [5], [4]].
	uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
	uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].
*/

/**
 * Returns a new array of unique values in the order of the original provided array
 * @param {Array<Array>} args the arrays to be united
 * @return {Array<any>} the array filtered with only unique values
 */
function uniteUnique(...args) {
	let mainArr = []
	args.forEach(arr => {
		mainArr.push(...filterExistents(mainArr, arr))
	});
  return mainArr;
}

/**
 * Returns a new array of unique values in the order of the original provided array
 * @param {Array<any>} mainArr the array to be filled with unique values
 * @param {Array<any>} newArr the new item to be inserted in the main array if it not exists there
 * @return {Array<any>} the array filtered with only unique values
 */
function filterExistents(mainArr, newArr){
	return newArr.filter(item => mainArr.indexOf(item) == -1);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);