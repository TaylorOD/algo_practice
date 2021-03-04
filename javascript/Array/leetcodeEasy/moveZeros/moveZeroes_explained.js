// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

// Problem: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/567/

// Create our function, a fancy arrow function, that takes in an input array
const moveZeroes = (inputArray) => {
  // Create an indexPointer
  let indexPointer = 0
  // Create a for loop
  for (let i = 0; i < inputArray.length; i += 1) {
    // If the inputArray element is not a zero
    if (inputArray[i] !== 0) {
      // make the first element in the array equal to the non-zero element we just encountered
      inputArray[indexPointer] = inputArray[i]
      // This line uses a ternary operator If inputArray[i] = indexPointer === i then inputArray[i] else 0
      // So inputArray[i] will either equal 0 or inputArray[i] depending on if indexPointer === i or not.
      // This prevents inputArray's of [1] returning zero
      inputArray[i] = indexPointer === i ? inputArray[i] : 0
      // Increment the index pointer by 1
      indexPointer += 1
    }
  }
  // Return our array with the zeros at the end
  return inputArray
}

// Run our function with give test inputs
console.log(moveZeroes([0, 1, 0, 3, 12]))
console.log(moveZeroes([0, 0, 1]))