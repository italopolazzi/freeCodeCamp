function destroyer(...args) {
  let arr = args[0];
  let elems = args.slice(1, args.length);
  let newArray = arr.filter(item => elems.indexOf(item) == -1)
  return newArray;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);