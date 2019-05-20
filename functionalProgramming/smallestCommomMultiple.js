function smallestCommons(arr) {
  return searchForCommonMultiple(generateRange(arr));
}

function searchForCommonMultiple(arr) {
  let current = arr[0] * arr[arr.length - 1];
  do {
    current++;
  } while (!testArrayWithCurrent(arr, current));
  return current;
}

function isMutiple(current, num) {
  return current % num == 0;
}

function testArrayWithCurrent(arr, current) {
  for (let i = 0; i < arr.length; i++) {
    if (isMutiple(current, arr[i])) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

function generateRange(arr) {
  const max = Math.max(arr[0], arr[1]);
  const min = Math.min(arr[0], arr[1]);
  return [...Array((max - min) + 1).keys()].map(num => num + min);
}
console.log(smallestCommons([1, 5]));
console.log(smallestCommons([2, 10]));
console.log(smallestCommons([1, 13]));
console.log(smallestCommons([23, 18]));