// https://leetcode.com/problems/move-zeroes/

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:

// Input: nums = [0]
// Output: [0]

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1

// Follow up: Could you minimize the total number of operations done?

const moveZeros = (inputArray) => {
  for (let index = 0; index < inputArray.length; index += 1) {
    if (inputArray[index] === 0) {
      inputArray.push(0)
      inputArray.splice(index, 1)
    }
  }
  return inputArray
}

console.log(moveZeros([0, 1, 0, 3, 12]))
console.log(moveZeros([0]))
console.log(moveZeros([0, 1, 0]))

const moveZerosLeet = (inputArray) => {
  let nonZero = 0
  for (let index = 0; index < inputArray.length; index += 1) {
    if (inputArray[index] !== 0) {
      inputArray[nonZero] = inputArray[index]
      inputArray[index] = nonZero === index ? inputArray[index] : 0
      nonZero += 1
    }
  }
}

console.log(moveZerosLeet([0, 1, 0, 3, 12]))
console.log(moveZerosLeet([0]))
console.log(moveZerosLeet([0, 1, 0]))