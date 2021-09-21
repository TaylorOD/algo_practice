// https://leetcode.com/problems/two-sum/

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

// Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

// Use hashmap to store each item
// Use nested loops to see if one number plus another number equal the item and return those
// or make a loop where we subtract the target from the current item and see if the hashmap includes that subtracted value.
// If it does then return it and the subtracted item. Get index of of both of them.

// My solution on my own:
// Create a function that takes in an inputarray and target number
const twoSum = (inputArray, targetNumber) => {
  // Create a map
  let map = {}
  // Create a results variable
  let result = []
  // Create a for loop where we move through the array
  for (let index = 0; index < inputArray.length; index += 1) {
    // Populate our map
    if (map[inputArray[index]] !== 1) {
      map[inputArray[index]] = index
    }
  }
  // Move through our map to see if the subtracted version of this target number exists
  for (let index = 0; index < inputArray.length; index += 1) {
    if ((map[targetNumber - inputArray[index]] = 1)) {
      // If it does add the results and break
      result.push(index, inputArray.indexOf(targetNumber - inputArray[index]))
      break
    }
  }
  // Return results
  return result
}

console.log(twoSum([2, 7, 11, 15], 9))

// Solution I'd previously made on Leetcode
// Create a function that takes in an input array and target
const twoSum2 = function (inputArray, target) {
  // Create a hash map
  let inputAsHash = {}
  // Create a for loop to move through our array
  for (let i = 0; i < inputArray.length; i += 1) {
    // Create our goal number variable which is the target subtracted our current number
    let goalNumber = target - inputArray[i]
    // Create our find variable which is our inputAsHash with our goalnumber passed in
    let find = inputAsHash[goalNumber]
    // If we find the number then return them
    if (find !== undefined) {
      return [find, i]
      // Else populate the hashmap
    } else {
      inputAsHash[inputArray[i]] = i
    }
  }
}
console.log(twoSum2([2, 7, 11, 15], 9))
