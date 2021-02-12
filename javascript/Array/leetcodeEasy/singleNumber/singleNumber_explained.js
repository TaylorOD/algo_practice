// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// Follow up: Could you implement a solution with a linear runtime complexity and without using extra memory?

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1

// Create a function that takes in an input array
const singleNumber = function (inputArray) {
  // Create a hash to store each number in array as we loop over it
  let existingNumbers = {}
  // Create a for loop to move through our array
  for (let i = 0; i < inputArray.length; i += 1) {
    // If the number does not exist in the hash then add it
    if (!existingNumbers[inputArray[i]]) {
      existingNumbers[inputArray[i]] = 1
      // If it does exist then increment it by 1
    } else {
      existingNumbers[inputArray[i]] += 1
    }
  }
  // Create a for in loop to loop over our hash and find the item with the value of 1
  for (let value in existingNumbers) {
    if (existingNumbers[value] === 1) {
      // Return that value because it is only in our hash once.
      return value
    }
  }
}

console.log(singleNumber([2, 2, 1]))
console.log(singleNumber([4, 1, 2, 1, 2]))
console.log(singleNumber([1]))
// O(n) solution