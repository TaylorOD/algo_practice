// Given an array of numbers, return a new array containing just two numbers (from the original array) that add up to the number 10. 
// If there are no two numbers that add up to 10, return false.

// Specifically use nested loops to solve this exercise even though there are other approaches as well.

// Input: [2, 5, 3, 1, 0, 7, 11]
// Output: [3, 7]

// Input: [1, 2, 3, 4, 5]
// Output: false (While 1, 2, 3, and 4 altogether add up to 10, we're seeking just one pair of numbers.)

// Create function that takes in a inputArray
const twoSum = function (inputArray) {
// Create out first for loop
  for (let i = 0; i < inputArray.length; i += 1) {
    // Create our second for loop that starts at index 1 rather than 0
    for (let j = 1; j < inputArray.length; j += 1) {
      // Create if condition that will keep us from returning two of the same numbers like [5, 5] as the result
      if (inputArray[i] != inputArray[j]) {
        // If the two selected elements being looped over equal ten than return those elements
        if (inputArray[i] + inputArray[j] === 10) {
          return [inputArray[i], inputArray[j]]
        }
      } 
    }
  }
  // If there is no elements that equal 10 than return false.
  return false
}
// Call function with both test inputs
console.log(twoSum([2, 5, 3, 1, 0, 7, 11]))
console.log(twoSum([1, 2, 3, 4, 5]))