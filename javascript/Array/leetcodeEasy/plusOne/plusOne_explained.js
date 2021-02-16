// Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Problem: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.

// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.

// Example 3:

// Input: digits = [0]
// Output: [1]

// Create our function that takes in an inputArray
const plusOne = function (inputArray) {
  // Take the last value of the inputArray and increment it by one
  let incrementedArray = inputArray[inputArray.length - 1] + 1
  // Remove the last value from the inputArray
  inputArray.pop(inputArray[inputArray.length - 1])
  // Add our incremented value to the input array
  inputArray.push(incrementedArray)
  // Return the input array
  return inputArray
}
// Call the function with three test cases
console.log(plusOne([1, 2, 3]))
console.log(plusOne([4, 3, 2, 1]))
console.log(plusOne([0]))
