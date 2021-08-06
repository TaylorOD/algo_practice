// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6

// Explanation: [4,-1,2,1] has the largest sum = 6.

// Example 2:

// Input: nums = [1]
// Output: 1

// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23

// Create a function that takes in an array of numbers
  // create CurrentMax Variable equal to the first element
  // Create max variable equal to the first element
  // Create a while loop that will move through the inputArray
    // update the CurrentMax value using Math.max and pass in CurrentMAx + inputArray[index], and inputArray[index]. The greater will be chosen
    // Update max with Math.max passing in CurrentMax and max. The greater will be chosen.
  //
  // Return max
//


// Create a function that takes in an array of numbers
const maximumSubarray = function (inputNumbers) {
  // Create a currentMax variable which starts as the first number in the inputNumbers
  let currentMax = inputNumbers[0]
  // Create a max variable which starts as the first number in the inputNumbers
  let max = inputNumbers[0]
  // Create a for loop that moves through the inputNumbers
  for (let index = 1; index < inputNumbers.length; index += 1) {
    // Set the currentMax to be the max sum of currentMax + inputNumbers[index] and inputNumbers[index]
    currentMax = Math.max(currentMax + inputNumbers[index], inputNumbers[index])
    // Update the max array to use the current max and max sum
    max = Math.max(currentMax, max)
  }
  // Return the max variable
  return max
}
// Call our function with the test inputs
console.log(maximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log(maximumSubarray([1]))
console.log(maximumSubarray([5, 4, -1, 7, 8]))