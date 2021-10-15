// https://leetcode.com/problems/contains-duplicate/

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true

// Example 2:

// Input: nums = [1,2,3,4]
// Output: false

// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Create function that takes in inputArray
  // Create hash
  // Use for loop to store numbers in hash
    // If number in hash return
    // else
    // store number in hash
  //
  // Return false
//

// O(n)

const containDups = (inputArray) => {
  let resultHash = {}
  for (let index = 0; index < inputArray.length; index += 1) {
    if (resultHash[inputArray[index]]) {
      return true
    } else {
      resultHash[inputArray[index]] = 1
    }
  }
  return false
}

console.log(containDups([1,2,3,1]))
console.log(containDups([1,2,3,4]))
console.log(containDups([1,1,1,3,3,4,3,2,4,2]))