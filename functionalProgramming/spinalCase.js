function spinalCase(str) {

  return str.replace(/([0-9a-zA-Z])([A-Z])/g, "$1 $2").toLowerCase().split(/[^0-9a-zA-Z]/g).join('-');
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("thisIsSpinal<wbr>Tap"));
console.log(spinalCase("The_Andy_<wbr>Griffith_Show"));
console.log(spinalCase("AllThe-small Things"));