// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

// Create a function that takes in our inputArray and a rotate number
const rotateArray = function (inputArray, rotate) {
  // Create a for loop that runs while it is less than our for loop
  for (let i = 0; i < rotate; i += 1) {
    // Using unshift we add an element to the start of our input array, and using pop that element is the last element in the array
    inputArray.unshift(inputArray.pop())
  }
  // Return the input array
  return inputArray
}
// Call the function with our two test cases
console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3))
console.log(rotateArray([-1, -100, 3, 99], 2))
