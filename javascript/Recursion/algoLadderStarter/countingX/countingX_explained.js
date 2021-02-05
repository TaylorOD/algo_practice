// Write a recursive function that returns the number of "x's" in a givin string.

// Input:
// "axbxcxd"

// Output:
// 3

// Create a function that takes in our inputString
const countingX = function (inputString) {
  // If the inputString has a length of 0 then return 0 - nothing is added - Base case
  if (inputString.length === 0) {
    return 0
  }
  // If the input string 0 is x then return 1 and remove one item from the string
  if (inputString[0] === "x") {
    return 1 + countingX(inputString.slice(1))
    // Else remove one item from the string and return no numbers
  } else {
    return countingX(inputString.slice(1))
  }
}
// Call our function with two test inputs
console.log(countingX("axbxcxd"))
console.log(countingX("axbxcxdxxx"))
