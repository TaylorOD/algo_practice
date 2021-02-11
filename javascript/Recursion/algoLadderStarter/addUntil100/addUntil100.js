// Write a recursive function that accepts an array of numbers and returns the sum as long as a particular number doesn't bring the sum above 100.
// Use recursion and memoization to avoid unnecessary recursion calls

const addUntil100 = function (inputArray) {
  let sumOfRemainingNumbers = 0
  if (inputArray.length === 0) {
    return 0
  }
  sumOfRemainingNumbers = addUntil100(inputArray.slice(1))
  if (inputArray[0] + sumOfRemainingNumbers > 100) {
    return sumOfRemainingNumbers
  } else {
    return inputArray[0] + sumOfRemainingNumbers
  }
}

console.log(addUntil100([7, 12, 10, 100, 19, 15, 75, 11]))