// Given an array of numbers, return a new array containing just two numbers (from the original array) that add up to the number 10. 
// If there are no two numbers that add up to 10, return false.

// Specifically use nested loops to solve this exercise even though there are other approaches as well.

// Input: [2, 5, 3, 1, 0, 7, 11]
// Output: [3, 7]

// Input: [1, 2, 3, 4, 5]
// Output: false (While 1, 2, 3, and 4 altogether add up to 10, we're seeking just one pair of numbers.)

const twoSum = function (inputArray) {

  for (let i = 0; i < inputArray.length; i += 1) {
    for (let j = 1; j < inputArray.length; j += 1) {
      if (inputArray[i] != inputArray[j]) {
        if (inputArray[i] + inputArray[j] === 10) {
          return [inputArray[i], inputArray[j]]
        }
      } 
    }
  }
  return false
}

console.log(twoSum([2, 5, 3, 1, 0, 7, 11]))
console.log(twoSum([1, 2, 3, 4, 5]))