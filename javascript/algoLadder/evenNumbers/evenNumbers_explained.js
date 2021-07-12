// Write a recursive function that accepts an array of numbers and returns a new array containing just the even numbers.
// Example:
// Input:
// [1, 2, 3, 4, 5, 6]
// Output:
// [2, 4, 6]

// Create function that takes in an inputArray
const evenNumbers = function (inputArray) {
  // If the inputArray is empty then return an empty array - Base case
  if (inputArray.length === 0) {
    return []
  }
  // If the first element in the array is divisible by 2 then return that element and call our function recursively and remove one element.
  if (inputArray[0] % 2 === 0) {
    return [inputArray[0] + evenNumbers(inputArray.splice(1))]
  } else {
    // If it is not divisible by 2 then remove that element.
    return evenNumbers(inputArray.splice(1))
  }
}
// Call our function with a test input
console.log(evenNumbers([1, 2, 3, 4, 5, 6]))