// Write a recursive function that accepts an array of numbers and returns a new array containing just the even numbers.
// Example:
// Input:
// [1, 2, 3, 4, 5, 6]
// Output:
// [2, 4, 6]

const evenNumbers = function (inputArray) {
  if (inputArray.length === 0) {
    return []
  }
  if (inputArray[0] % 2 === 0) {
    return [inputArray[0] + evenNumbers(inputArray.splice(1))]
  } else {
    return evenNumbers(inputArray.splice(1))
  }
}

console.log(evenNumbers([1, 2, 3, 4, 5, 6]))