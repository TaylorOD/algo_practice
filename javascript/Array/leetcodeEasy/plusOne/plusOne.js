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

const plusOne = function (inputArray) {
  let incrementedElement = inputArray[inputArray.length - 1] + 1

  if (incrementedElement >= 10) {
    let splitNumber = incrementedElement.toString().split("")
    let first = parseInt(splitNumber[0])
    let second = parseInt(splitNumber[1])
    inputArray.pop(inputArray[inputArray.length - 1])
    inputArray.push(first, second)
    return inputArray
  } else {
    inputArray.pop(inputArray[inputArray.length - 1])
    inputArray.push(incrementedElement)
    return inputArray
  }
}

console.log(plusOne([1, 2, 3]))
console.log(plusOne([4, 3, 2, 1]))
console.log(plusOne([0]))
console.log(plusOne([9]))