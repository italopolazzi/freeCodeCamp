function uniteUnique(...args) {
	let mainArr = []
	args.forEach(arr => {
		mainArr.push(...filterExistents(mainArr, arr))
	});
  return mainArr;
}

function filterExistents(mainArr, newArr){
	return newArr.filter(item => mainArr.indexOf(item) == -1);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);