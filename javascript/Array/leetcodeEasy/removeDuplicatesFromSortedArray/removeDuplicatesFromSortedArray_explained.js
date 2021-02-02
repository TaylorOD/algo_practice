// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// Problem: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/

// Examples:
// Input: nums = [1, 1, 2]
// Output: 2, (nums = [1, 2])

// Input: nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
// Output: 5, (nums = [0, 1, 2, 3, 4])

// Create function that takes in our inputArray
const removeDups = function (inputArray) {
  // Create hash that we will use too store values from inputArray
  let inputArrayAsHash = {}

  // Create a for loop to loop over inputArray
  for (let i = 0; i < inputArray.length; i += 1) {
    // If the element does already exist in the hash
    if (inputArrayAsHash[inputArray[i]] !== undefined) {
      // remove it
      inputArray.splice(inputArrayAsHash[inputArray[i]], 1)
      // Decrement the index
      i--
      // Set the new index value
      inputArrayAsHash[inputArray[i]] = i
      // Else set the new index value
    } else {
      inputArrayAsHash[inputArray[i]] = i
    }
  }
  // Return the length and the array
  return [inputArray.length, inputArray]
}
// Call the function with our two test cases
console.log(removeDups([1, 1, 2]))
console.log(removeDups([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))