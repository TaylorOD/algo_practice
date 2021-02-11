// Write a recursive function that accepts an array of numbers and returns the sum as long as a particular number doesn't bring the sum above 100.
// Use recursion and memoization to avoid unnecessary recursion calls

const addUntil100 = function (inputArray) {
  if (inputArray.length === 0) {
    return 0
  }
  if (inputArray[0] + addUntil100(inputArray.splice(1)) > 100) {
    return addUntil100(inputArray.splice(1))
  } else {
    return inputArray[0] + addUntil100(inputArray.splice(1))
  }
}

console.log(addUntil100([7, 12, 10, 100, 19, 15]))