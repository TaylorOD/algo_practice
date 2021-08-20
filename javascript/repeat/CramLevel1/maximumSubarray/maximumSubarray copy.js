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

const maximumSubarray = function (inputNumbers) {
  let currentMax = inputNumbers[0]
  let max = inputNumbers[0]
  for (let index = 1; index < inputNumbers.length; index += 1) {
    currentMax = Math.max(currentMax + inputNumbers[index], inputNumbers[index])
    max = Math.max(max, currentMax)
  }
  return max
}

console.log(maximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log(maximumSubarray([1]))
console.log(maximumSubarray([5, 4, -1, 7, 8]))