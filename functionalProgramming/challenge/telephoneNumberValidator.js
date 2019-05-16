function telephoneCheck(str) {
	let test = [
		/^\d{3}-\d{3}-\d{4}$/g,
		/^\(\d{3}\)\d{3}-\d{4}$/g,
		/^\(\d{3}\) \d{3}-\d{4}$/g,
		/^\d{3} \d{3} \d{4}$/g,
		/^\d{10}$/g,
		/^1 \d{3} \d{3} \d{4}$/g,
		/^1\(\d{3}\)\d{3}-\d{4}$/g,
		/^1 \(\d{3}\) \d{3}-\d{4}$/g,
		/^1 \d{3}-\d{3}-\d{4}$/g,
	]
	for (let i in test) {
		if (str.match(test[i])) return true
	}
	return false
}
let toTest = [
	{ str: "1 555-555-5555", bol: true },
	{ str: "1 (555) 555-5555", bol: true },
	{ str: "5555555555", bol: true },
	{ str: "555-555-5555", bol: true },
	{ str: "(555)555-5555", bol: true },
	{ str: "1(555)555-5555", bol: true },
	{ str: "555-5555", bol: false },
	{ str: "5555555", bol: false },
	{ str: "1 555)555-5555", bol: false },
	{ str: "1 555 555 5555", bol: true },
	{ str: "1 456 789 4444", bol: true },
	{ str: "123**&!!asdf#", bol: false },
	{ str: "55555555", bol: false },
	{ str: "(6054756961)", bol: false },
	{ str: "2 (757) 622-7382", bol: false },
	{ str: "0 (757) 622-7382", bol: false },
	{ str: "-1 (757) 622-7382", bol: false },
	{ str: "2 757 622-7382", bol: false },
	{ str: "10 (757) 622-7382", bol: false },
	{ str: "27576227382", bol: false },
	{ str: "(275)76227382", bol: false },
	{ str: "2(757)6227382", bol: false },
	{ str: "2(757)622-7382", bol: false },
	{ str: "555)-555-5555", bol: false },
	{ str: "(555-555-5555", bol: false },
	{ str: "(555)5(55?)-5555", bol: false }
]
for (let i in toTest) {
	console.log(`String:      \t${toTest[i].str}`)
	console.log(`Deveria vir: \t${toTest[i].bol}`)
	console.log(`Veio:        \t${telephoneCheck(toTest[i].str)}`)
	console.log()
}