let Person = function (firstAndLast) {

	const divideFirstAndLast = (firstAndLast) => firstAndLast.split(' ')

	const updateFullName = (arr) => this.fullName = arr

	const isString = (arg) => typeof arg === 'string'

	const testIfIsString = (arg) => {
		if (!isString(arg)) {
			throw new Error('The argument is not a string')
		}
	}

	let fullName = [firstName, lastName] = divideFirstAndLast(firstAndLast)

	this.getFullName = () => this.fullName.join(' ')

	this.getFirstName = () => this.firstName

	this.getLastName = () => this.lastName

	this.setFirstName = (first) => {
		testIfIsString(first);
		this.firstName = first
		updateFullName([this.firstName, this.lastName])
	}
	this.setLastName = (last) => {
		testIfIsString(last);
		this.lastName = last
		updateFullName([this.firstName, this.lastName])
	}
	this.setFullName = (firstAndLast) => {
		testIfIsString(firstAndLast);
		updateFullName(divideFirstAndLast(firstAndLast))
	}

	return firstAndLast;
};

let bob = new Person('Bob Ross');
console.log(bob.getFullName());