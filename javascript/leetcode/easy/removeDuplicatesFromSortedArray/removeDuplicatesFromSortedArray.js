// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// Problem: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/

// Examples:
// Input: nums = [1, 1, 2]
// Output: 2, (nums = [1, 2])

// Input: nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
// Output: 5, (nums = [0, 1, 2, 3, 4])

const removeDups = function (inputArray) {
  let inputArrayAsHash = {}

  for (let i = 0; i < inputArray.length; i += 1) {
    if (inputArrayAsHash[inputArray[i]] !== undefined) {
      inputArray.splice(inputArrayAsHash[inputArray[i]], 1)
      i--
      inputArrayAsHash[inputArray[i]] = i
    } else {
      inputArrayAsHash[inputArray[i]] = i
    }
  }
  return [inputArray.length, inputArray]
}

console.log(removeDups([1, 1, 2]))
console.log(removeDups([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))