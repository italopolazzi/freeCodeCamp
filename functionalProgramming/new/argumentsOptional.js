/*
Arguments Optional
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
*/

function addTogether(...args) {
	if (isNumber(args)) {
		switch (args.length) {
			case 1:
				return (y) => isNumber([y]) ? args[0] + y : undefined;
			case 2:
				return args[0] + args[1]
		}
	}
}

function isNumber(args) {
	return args.every(item => typeof item === 'number')
}

console.log(addTogether(2)(3));