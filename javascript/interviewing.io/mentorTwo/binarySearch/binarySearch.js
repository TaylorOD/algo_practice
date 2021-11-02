// https://leetcode.com/problems/binary-search/

// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

// Constraints:

// 1 <= nums.length <= 104
// -104 < nums[i], target < 104
// All the integers in nums are unique.
// nums is sorted in ascending order.

const binarySearch = (inputArray, target) => {
  for (let index = 0; index < inputArray.length; index += 1) {
    if (inputArray[index] === target) {
      return index
    }
  }
  return -1
}

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9))
console.log(binarySearch([-1, 0, 3, 5, 9, 12], 2))

const binarySearchLeet = (inputArray, target) => {
  let low = 0
  let high = inputArray.length - 1
  while(low <= high) {
    let middle = Math.floor((low + high) / 2)
    if (inputArray[middle] === target) {
      return middle
    } else if (inputArray[middle] < target) {
      low = middle + 1
    } else {
      high = middle - 1
    }
  }
  return -1
}

console.log(binarySearchLeet([-1, 0, 3, 5, 9, 12], 9))
console.log(binarySearchLeet([-1, 0, 3, 5, 9, 12], 2))