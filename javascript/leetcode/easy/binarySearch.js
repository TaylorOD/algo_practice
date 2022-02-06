const binarySearch = (inputArray, target) => {
  let left = 0;
  let right = inputArray.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (inputArray[middle] === target) {
      return target
    } else if (inputArray[middle] < target) {
      left = middle + 1
    } else {
      right = middle - 1
    }
  }
  return -1;
}

console.log(binarySearch([1,2,3,4,5], 4))