function whatIsInAName(collection, source) {
  var arr = [];
  var collectionKeys = Object.keys(collection);
  var sourceKeys = Object.keys(source);


	collection.forEach(item => {
		const itemContainProps = []
		sourceKeys.forEach(key => {
			itemContainProps.push(item.hasOwnProperty(key) && item[key] == source[key])
		})
		if(itemContainProps.reduce((a,b) => a&&b)) arr.push(item);
	})

  return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Capulet" }, { first: "Mercutio", last: null }, { first: "Tybalt"}], { last: "Capulet"}));