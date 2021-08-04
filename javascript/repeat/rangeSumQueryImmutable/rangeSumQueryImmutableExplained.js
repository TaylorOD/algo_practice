// Given an integer array nums, handle multiple queries of the following type:

// Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
// Implement the NumArray class:

// NumArray(int[] nums) Initializes the object with the integer array nums.
// int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).


// Example 1:

// Input
// ["NumArray", "sumRange", "sumRange", "sumRange"]
// [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
// Output
// [null, 1, -1, -3]

// Explanation
// NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
// numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
// numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
// numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3

// Create a function that takes in nums array
const NumArray = function (nums) {
  // Create sum and map variables which are both equal to zero
  let sum = 0, map = [0]
  // Create a for loop to move through the nums array
  for (let i = 1; i <= nums.length; i += 1) {
    // Add the nums index -1 to the sum variable
    sum += nums[i - 1]
    // Add each index to our map with a value of sum.
    map[i] = sum
  }
  // Make this.map equal to map
  this.map = map
}
// Create a sumRange function that takes in our left and right pointers
NumArray.prototype.sumRange = function (left, right) {
  // Create a map variable which is equal to this.map
  let map = this.map
  // Return map right pointer +1 minus map left pointer
  return map[right + 1] - map[left]
}