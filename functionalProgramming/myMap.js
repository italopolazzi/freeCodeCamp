Array.prototype.myMap = function (callback) {
	let temp = []
	this.forEach(item => {
		temp.push(callback(item))
	})
	return temp
}

let arr = [0, 1, 2, 4, 5]

console.log(arr)
console.log(arr.myMap(item => item ** 3))