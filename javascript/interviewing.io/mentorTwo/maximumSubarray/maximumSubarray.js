// https://leetcode.com/problems/maximum-subarray/

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

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104

// Create currentSubarray
// Create maxSubarray
// Move through inputArray
  // If currentSubarray greater than max subarray
  // Set maxSubarray to math.max (currentSubarray, maxSubarray)
// return maxSubarray

const maxSubarray = (inputArray) => {
  let currentSubarray = inputArray[0]
  let maxSubarray = inputArray[0]
  for (let index = 1; index < inputArray.length; index += 1) {
    currentSubarray = Math.max(currentSubarray + inputArray[index], inputArray[index])
    maxSubarray = Math.max(currentSubarray, maxSubarray)
  }
  return maxSubarray
}

console.log(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log(maxSubarray([1]))
console.log(maxSubarray([5, 4, -1, 7, 8]))