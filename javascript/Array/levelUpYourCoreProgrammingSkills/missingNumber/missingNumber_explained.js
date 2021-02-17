// Find the missing number from an array of integers.
// The array is expected to have all the integers from 0 up to the arrays length but one is missing.
// Write a function that takes only O(N log N)

// Example:
// Input: [5, 2, 4, 1, 0]
// Output: 3

// Input: [9, 3, 2, 5, 6, 7, 1, 0, 4]
// Output: 8

// Create a function that takes in an inputArray
const missingNumber = function (inputArray) {
  // Sort our inputArray
  inputArray.sort((a, b) => a - b)
  // Create a for loop that will run the length of the array
  for (let i = 0; i < inputArray.length; i += 1) {
    // Because our array is sorted our index should always equal the number we are currently looping over in the array.
    // If it does not then that means the number is missing and we can return it.
    if (inputArray[i] != i) {
      return i
    }
  }
  // If no missing number is returned explain that
  return "No missing number"
}
// Call our function with three test inputsg
console.log(missingNumber([5, 2, 4, 1, 0]))
console.log(missingNumber([9, 3, 2, 5, 6, 7, 1, 0, 4]))
console.log(missingNumber([9, 3, 2, 5, 6, 7, 1, 0, 4, 8]))
