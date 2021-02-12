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

const singleNumber = function (inputArray) {
  let existingNumbers = {}

  for (let i = 0; i < inputArray.length; i += 1) {
    if (!existingNumbers[inputArray[i]]) {
      existingNumbers[inputArray[i]] = 1
    } else {
      existingNumbers[inputArray[i]] += 1
    }
  }
  for (let value in existingNumbers) {
    if (existingNumbers[value] === 1) {
      return value
    }
  }
}

console.log(singleNumber([2, 2, 1]))
console.log(singleNumber([4, 1, 2, 1, 2]))
console.log(singleNumber([1]))