// https://leetcode.com/problems/majority-element/

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3

// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -231 <= nums[i] <= 231 - 1

// Follow-up: Could you solve the problem in linear time and in O(1) space?

// Create function that takes in an array
const majorityElement = (inputArray) => {
  // Sort that array
  let sortedArray = inputArray.sort()
  // Find the middle of the array and return it. It will always be the more numerous element if there is a majority element.
  return sortedArray[Math.floor(sortedArray.length / 2)]
}
// Call our function with two test inputs
console.log(majorityElement([3, 2, 3]))
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))
