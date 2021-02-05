// Write a function to reverse a string recursively.

// Input:
// "abcde"

// Output:
// "edcba"

const stringReversal = function (inputString) {
  if (inputString.length === 1) {
    return inputString[0]
  }
  return stringReversal(inputString.slice(1)) + inputString[0]
}

console.log(stringReversal("abcde"))