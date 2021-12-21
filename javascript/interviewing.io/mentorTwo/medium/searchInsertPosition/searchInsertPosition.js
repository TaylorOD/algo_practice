// https://leetcode.com/problems/search-insert-position/

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104

// Thoughts:
// Because sorted array could be binary search
// Because O(log n) has to be binary search

// Pseudo Code:
// Create function that takes in inputArray and target
// create left and right variables for binary search
// Create a while loop = left <= right
// Create middle = floor((left + right) / 2)
// If conditional to see if inputArray[middle] = target
// return middle
// else if conditional to see if inputArray[middle] < target
// left = middle + 1
// else conditional
// right = middle + 1
// Return left
//

const searchInsertPosition = (inputArray, target) => {
  let left = 0
  let right = inputArray.length - 1
  while (left <= right) {
    let middle = Math.floor((left + right) / 2)
    if (inputArray[middle] === target) {
      return middle
    } else if (inputArray[middle] < target) {
      left = middle + 1
    } else {
      right = middle - 1
    }
  }
  return left
}

console.log(searchInsertPosition([1, 3, 5, 6], 5))
console.log(searchInsertPosition([1, 3, 5, 6], 2))
console.log(searchInsertPosition([1, 3, 5, 6], 7))
