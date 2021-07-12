// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Problem: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/

// Example 1:

// Input: [1,2,3,1]
// Output: true
// Example 2:

// Input: [1,2,3,4]
// Output: false
// Example 3:

// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true

const containsDuplicate = function (inputArray) {
  let results = {}
  for (let i = 0; i < inputArray.length; i += 1) {
    if (!results[inputArray[i]]) {
      results[inputArray[i]] = true
    } else {
      return true
    }
  }
  return false
}

console.log(containsDuplicate([1, 2, 3, 1]))
console.log(containsDuplicate([1, 2, 3, 4]))
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))

// O(N) solution