// https://leetcode.com/problems/find-the-duplicate-number/

// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.

// Example 1:

// Input: nums = [1,3,4,2,2]
// Output: 2

// Example 2:

// Input: nums = [3,1,3,4,2]
// Output: 3

// Example 3:

// Input: nums = [1,1]
// Output: 1

// Example 4:

// Input: nums = [1,1,2]
// Output: 1

// Constraints:

// 1 <= n <= 105
// nums.length == n + 1
// 1 <= nums[i] <= n
// All the integers in nums appear only once except for precisely one integer which appears two or more times.

// Create function that takes in input array
const findTheDuplicateNumber = (inputArray) => {
  // Create slow and fast pointers
  let slow = inputArray[0]
  let fast = inputArray[inputArray[0]]

  // Move through array once and move slow one and fast one
  while (slow !== fast) {
    slow = inputArray[slow]
    fast = inputArray[inputArray[fast]]
  }
  // Reset slow
  slow = 0
  // Move through array and move fast two and slow one
  while (slow !== fast) {
    slow = inputArray[slow]
    fast = inputArray[fast]
  }
  // Return fast
  return fast
}

console.log(findTheDuplicateNumber([1, 3, 4, 2, 2]))
console.log(findTheDuplicateNumber([3, 1, 3, 4, 2]))
console.log(findTheDuplicateNumber([1, 1]))
console.log(findTheDuplicateNumber([1, 1, 2]))