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

const squaresOfSortedArray = (inputArray) => {
  let squaredArray = []
  for (let index = 0; index < inputArray.length; index += 1) {
    squaredArray.push(Math.pow(inputArray[index], 2))
  }
  squaredArray.sort((a, b) => (a - b))
  return squaredArray
}

// console.log(squaresOfSortedArray([-4, -1, 0, 3, 10]))
// console.log(squaresOfSortedArray([-7, -3, 2, 3, 11]))

const sortedSquares = function (inputArray) {
  let result = []
  let left = 0
  let right = inputArray.length - 1

  for (let index = inputArray.length - 1; index >= 0; index += 1) {
    if (Math.abs(inputArray[left]) < Math.abs(inputArray[right])) {
      result[index] = inputArray[right] ** 2
      right -= 1
    } else {
      result[index] = inputArray[left] ** 2
      left += 1
    }
  }
  return result
}

console.log(sortedSquares([-4, -1, 0, 3, 10]))
console.log(sortedSquares([-7, -3, 2, 3, 11]))