// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

// Problem: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/567/

const moveZeros = (inputArray) => {
  let indexPointer = 0
  for (let i = 0; i < inputArray.length; i += 1) {
    if (inputArray[i] !== 0) {
      inputArray[indexPointer] = inputArray[i]
      inputArray[i] = indexPointer === i ? inputArray[i] : 0
      indexPointer += 1
    }
  }
  return inputArray
}

console.log(moveZeros([0, 1, 0, 3, 12]))
console.log(moveZeros([0, 0, 1]))