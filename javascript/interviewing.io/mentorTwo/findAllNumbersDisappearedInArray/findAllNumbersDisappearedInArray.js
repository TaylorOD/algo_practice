// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]

// Example 2:

// Input: nums = [1,1]
// Output: [2]

// Constraints:

// n == nums.length
// 1 <= n <= 105
// 1 <= nums[i] <= n

// Create hash
// Create resultArray
// Loop through array and add inputArray elements to hash
// Loop through array and if item doesnt exist add it to the result hash
// Return results hash

const numberDups = (inputArray) => {
  const numberHash = {}
  const resultsArray = []

  for (let index = 0; index < inputArray.length; index += 1) {
    if(!numberHash[inputArray[index]]) {
      numberHash[inputArray[index]] = true
    }
  }

  for (let index = 1; index <= inputArray.length; index += 1) {
    if (!numberHash[index]) {
      resultsArray.push(index)
    }
  }

  return resultsArray
}

console.log(numberDups([4, 3, 2, 7, 8, 2, 3, 1]))
console.log(numberDups([1, 1]))