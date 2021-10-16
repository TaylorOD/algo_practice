// https://leetcode.com/problems/single-number/

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:

// Input: nums = [2,2,1]
// Output: 1

// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4

// Example 3:

// Input: nums = [1]
// Output: 1

// Constraints:

// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except for one element which appears only once.

// Create resultHash
// loop through inputArray and add all items to result hash if not in it
// loop through inputArray and check if inputArray element is in result hash 2 times. If not return it

// Create a function that takes in an inputArray
const singleNumber = (inputArray) => {
  // Create a numberHash to store our numbers in
  let numberHash = {}
  // Create a for loop to move through our array
  for (let index = 0; index < inputArray.length; index += 1) {
    // If item doesnt exist in number hash than add it
    if (!numberHash[inputArray[index]]) {
      numberHash[inputArray[index]] = 1
      // If it does than increment it by 1
    } else {
      numberHash[inputArray[index]] += 1
    }
  }
  // Loop through our numberHash
  for (let index = 0; index < inputArray.length; index += 1) {
    // If an item only exists in it once than return it
    if (numberHash[inputArray[index]] === 1) {
      return inputArray[index]
    }
  }
}

console.log(singleNumber([2, 2, 1]))
console.log(singleNumber([4, 1, 2, 1, 2]))
console.log(singleNumber([1]))