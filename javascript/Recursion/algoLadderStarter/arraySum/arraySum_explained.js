// Write a recursive function that takes in an array and returns the sum of the array

const arraySum = function (inputArray) {
  if (inputArray.length === 1) {
    return inputArray[0]
  }
  return inputArray[0] + arraySum(inputArray[(1, inputArray.length - 1)])
}

console.log(arraySum([1, 2, 3, 4, 5]))
