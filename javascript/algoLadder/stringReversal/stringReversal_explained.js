// Write a function to reverse a string recursively.

// Input:
// "abcde"

// Output:
// "edcba"

// Create function that takes in an inputString
const stringReversal = function (inputString) {
  // If the inputString length is one then return the inputString[0] - base case
  if (inputString.length === 1) {
    return inputString[0]
  }
  // Otherwise return the input string with one element removed and inputString[0] added
  return stringReversal(inputString.slice(1)) + inputString[0]
}
// Call our function with a test string
console.log(stringReversal("abcde"))
