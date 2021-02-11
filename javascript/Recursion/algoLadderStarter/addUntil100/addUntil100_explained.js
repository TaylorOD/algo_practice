// Write a recursive function that accepts an array of numbers and returns the sum as long as a particular number doesn't bring the sum above 100.
// Use recursion and memoization to avoid unnecessary recursion calls

// Create function that takes in an array of numbers
const addUntil100 = function (inputArray) {
  // Create a variable to store the sum of remaining numbers so we don't have to do multiple recursion calls
  let sumOfRemainingNumbers = 0
  // If inputArray length = 0 then return 0 - base case
  if (inputArray.length === 0) {
    return 0
  }
  // Sub of remaining numbers = our current recursion call
  sumOfRemainingNumbers = addUntil100(inputArray.slice(1))
  // If the current input and the sum of remaining numbers is less that 100
  if (inputArray[0] + sumOfRemainingNumbers > 100) {
    // Return the sum of remaining numbers
    return sumOfRemainingNumbers
  } else {
    // Else return the current value plus the sum of remaining numbers
    return inputArray[0] + sumOfRemainingNumbers
  }
}
// Call the function with the test input
console.log(addUntil100([7, 12, 10, 100, 19, 15, 75, 11]))
