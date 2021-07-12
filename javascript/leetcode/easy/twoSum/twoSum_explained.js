// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Problem: leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/546/

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Create our function that takes in an inputArray and a target
const twoSum = function (inputArray, target) {
  // Create empty hash that we will use to store our inputArray
  let inputAsHash = {}
  // Create a for loop
  for (let i = 0; i < inputArray.length; i += 1) {
    // Create a variable that is the target - our inputArray[i]. We will compare this to find our needed result later
    let goalNumber = target - inputArray[i]
    // Create find which is equal to our hash with the above goalnumber var.
    let find = inputAsHash[goalNumber]
    // If find does not equal undefined - this will equal undefined in every case but when there is a match, then return find and i. Those are our two index.
    if (find !== undefined) {
      return [find, i]
    // Else add this element to the hash
    } else {
      inputAsHash[inputArray[i]] = i
    }
  }
}

// Call our function with three test inputs
console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 2, 4], 6))
console.log(twoSum([3, 3], 6))
