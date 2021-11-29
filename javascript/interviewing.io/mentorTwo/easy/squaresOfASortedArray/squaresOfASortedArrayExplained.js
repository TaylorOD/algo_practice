// https://leetcode.com/problems/squares-of-a-sorted-array/

// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.
// Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?

// create function that takes in inputArray
// call math.Square(inputArray).sort()
// return inputArray
//

// Taylor attempt - O(N2)
// Create a function where we take in an inputArray
const squaresOfSortedArray = (inputArray) => {
  // Create an empty array we will use to add our results
  let squaredArray = []
  // Create a for loop to move through our array
  for (let index = 0; index < inputArray.length; index += 1) {
    // Add each squared item to our array
    squaredArray.push(Math.pow(inputArray[index], 2))
  }
  // Sort our squared array
  squaredArray.sort((a, b) => a - b)
  // Return that squared array
  return squaredArray
}

console.log(squaresOfSortedArray([-4, -1, 0, 3, 10]))
console.log(squaresOfSortedArray([-7, -3, 2, 3, 11]))

// Leetcode approach - O(N) -  Two Pointer
const sortedSquares = function (inputArray) {
  // Create a results variable
  let result = []
  // Create a left pointer at 0
  let left = 0
  // Create a right pointer at the end of our array
  let right = inputArray.length - 1
  // Create a for loop that runs from back to front
  for (let index = inputArray.length - 1; index >= 0; index--) {
    // If the absolute value of left is greater than right then
    if (Math.abs(inputArray[left]) < Math.abs(inputArray[right])) {
      // Decrement right and add right squared to our result array
      result[index] = inputArray[right] ** 2
      right -= 1
    } else {
      // Else do the other side and increment
      result[index] = inputArray[left] ** 2
      left += 1
    }
  }
  // Return the result
  return result
}

console.log(sortedSquares([-4, -1, 0, 3, 10]))
console.log(sortedSquares([-7, -3, 2, 3, 11]))