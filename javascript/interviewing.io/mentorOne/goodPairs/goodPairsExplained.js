// https://leetcode.com/problems/number-of-good-pairs/

// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

// Example 2:

// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.

// Example 3:

// Input: nums = [1,2,3]
// Output: 0

// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

// Create a function that takes in an array of numbers
const goodPairs2 = (inputNumbers) => {
  // Create a map
  let map = {}
  // Create a count variable
  let count = 0
  // Create a for of loop where we move through our numbers array
  for (const number of inputNumbers) {
    // Check if our map[number] exists
    if (map[number]) {
      // If it does add the value to the count
      count += map[number]
      // Increment the map[number]
      map[number] += 1
      // Else create it
    } else {
      map[number] = 1
    }
  }
  // Return the count
  return count
}

console.log(goodPairs2([1, 2, 3, 1, 1, 3]))
console.log(goodPairs2([1, 1, 1, 1]))
console.log(goodPairs2([1, 2, 3]))
