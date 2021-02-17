// Find the missing number from an array of integers.
// The array is expected to have all the integers from 0 up to the arrays length but one is missing.
// Write a function that takes only O(N log N)

// Example:
// Input: [5, 2, 4, 1, 0]
// Output: 3

// Input: [9, 3, 2, 5, 6, 7, 1, 0, 4]
// Output: 8

const missingNumber = function (inputArray) {
  inputArray.sort((a, b) => a - b)
  for (let i = 0; i < inputArray.length; i += 1) {
    if (inputArray[i] != i) {
      return i
    }
  }
  return "No missing number"
}

console.log(missingNumber([5, 2, 4, 1, 0]))
console.log(missingNumber([9, 3, 2, 5, 6, 7, 1, 0, 4]))
console.log(missingNumber([9, 3, 2, 5, 6, 7, 1, 0, 4, 8]))