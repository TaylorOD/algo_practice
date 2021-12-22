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

const sortedSquares = (inputArray) => {
  let squaredArray = []
  for (let index = 0; index < inputArray.length; index += 1) {
    squaredArray.push(Math.pow(inputArray[index], 2))
  }
  return squaredArray.sort((a, b) => a - b)
}

console.log(sortedSquares([-4, -1, 0, 3, 10]))
console.log(sortedSquares([-7, -3, 2, 3, 11]))

// Pseudo Code:
// Create function that takes in array
// Create results array
// Create left pointer
// Create right pointer
// Create for loop to move through array
//
// return results array
//

// Thoughts:
// to get O(n) approach can use two pointer

// Create a function that takes in array of numbers
const sortedSquaresTwo = (inputArray) => {
  // Create empty result array
  let result = []
  // Create left pointer
  let left = 0
  // Create right pointer
  let right = inputArray.length - 1
  // Create while loop
  while (left <= right) {
    // If the first item is greater than the last item
    if (Math.pow(inputArray[left], 2) > Math.pow(inputArray[right], 2)) {
      // add the first item to the end of the array and then increment left
      result.unshift(Math.pow(inputArray[left], 2))
      left += 1
      // Else do that with the right side
    } else {
      result.unshift(Math.pow(inputArray[right], 2))
      right -= 1
    }
  }
  // Return results
  return result
}

console.log(sortedSquaresTwo([-4, -1, 0, 3, 10]))
console.log(sortedSquaresTwo([-7, -3, 2, 3, 11]))
