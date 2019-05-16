let cashTypes = [
	{ name: 'ONE HUNDRED', val: 100.00 },
	{ name: 'TWENTY', val: 20.00 },
	{ name: 'TEN', val: 10.00 },
	{ name: 'FIVE', val: 5.00 },
	{ name: 'ONE', val: 1.00 },
	{ name: 'QUARTER', val: 0.25 },
	{ name: 'DIME', val: 0.10 },
	{ name: 'NICKEL', val: 0.05 },
	{ name: 'PENNY', val: 0.01 }
];

function getResult(change, cid) {
	let cidReversed = cid.reverse()
	let solution = [];
	let total = 0;

	cashTypes.forEach((type, index) => {
		let value = type.val;
		if (value <= change) {
			let totalOfType = 0;
			while (cidReversed[index][1] > 0 && change >= value) {
				change -= value
				cidReversed[index][1] -= value
				totalOfType += value

				change = Math.round(change * 100) / 100;
			}
			if (totalOfType !== 0) {
				solution.push([type.name, totalOfType])
				total += totalOfType
			}
		}
	})
	return { solution, total: Math.round(total * 100) / 100 };
}

function checkCashRegister(price, cash, cid) {
	let output = { status: null, change: [] };
	let change = cash - price;
	let iniChange = change;
	let cidTotal = getTotalCid(cid)

	if (cidTotal < change) {
		output.status = 'INSUFFICIENT_FUNDS';
		return output;
	}

	if (cidTotal === change) {
		output.status = 'CLOSED';
		output.change = cid;
		return output;
	}

	let result = getResult(change, cid)
	console.log({result})
	if (result.total === iniChange) {
		output.status = 'OPEN';
		output.change = result.solution.sort((a, b) => b[1] > a[1]);
	} else {
		output.status = 'INSUFFICIENT_FUNDS';
		return output;
	}
	return output;
}

function getTotalCid(cid) {
	let total = 0;
	cid.forEach(item => total += item[1])
	return total
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 400]]))

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))