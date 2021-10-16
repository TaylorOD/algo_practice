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

// Create a function that takes in an inputArray
const numberDups = (inputArray) => {
  // Create a hash to store our inputArray items
  const numberHash = {}
  // Create a results array to store out results
  const resultsArray = []
  // Loop through our array and add each item to our hash
  for (let index = 0; index < inputArray.length; index += 1) {
    if (!numberHash[inputArray[index]]) {
      numberHash[inputArray[index]] = true
    }
  }
  // Loop through our array and any item that is not in our hash add to our results array
  for (let index = 1; index <= inputArray.length; index += 1) {
    if (!numberHash[index]) {
      resultsArray.push(index)
    }
  }
  // Return the resultsArray
  return resultsArray
}
// Call our function with two test inputs
console.log(numberDups([4, 3, 2, 7, 8, 2, 3, 1]))
console.log(numberDups([1, 1]))
