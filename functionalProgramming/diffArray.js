function diffArray(arr1, arr2) {
  var newArr = [];
  
  let arrays = [arr1, arr2];
  
  arrays.sort((a,b)=> a.length < b.length);
  
  arrays[0].forEach(item => arrays[1].indexOf(item) == -1 ? newArr.push(item) : "")
  arrays[1].forEach(item => arrays[0].indexOf(item) == -1 ? newArr.push(item) : "")

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);