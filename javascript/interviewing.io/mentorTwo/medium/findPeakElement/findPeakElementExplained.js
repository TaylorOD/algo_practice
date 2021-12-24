// A peak element is an element that is strictly greater than its neighbors.

// Given an integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

// You may imagine that nums[-1] = nums[n] = -∞.

// You must write an algorithm that runs in O(log n) time.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 2
// Explanation: 3 is a peak element and your function should return the index number 2.
// Example 2:

// Input: nums = [1,2,1,3,5,6,4]
// Output: 5
// Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.

// Create function that takes in inputArray - Using Binary Search
const findPeak = (inputArray) => {
  // left as low
  let left = 0
  // Use right as high
  let right = inputArray.length - 1
  // While left less than right
  while (left < right) {
    // Create middle
    let middle = Math.floor((right + left) / 2)
    // If the middle is greater than the middle + 1
    if (inputArray[middle] < inputArray[middle + 1]) {
      // Right equals middle
      left = middle + 1
      // Otherwise left equals middle plus 1
    } else {
      right = middle
    }
  }
  // Return left
  return left
}
// Call out function with test inputs
console.log(findPeak([1, 2, 3, 1]))
console.log(findPeak([1, 3, 5, 3, 1]))
console.log(findPeak([1, 2, 1, 3, 5, 6, 4]))
