// https://leetcode.com/problems/find-all-duplicates-in-an-array/

// Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

// You must write an algorithm that runs in O(n) time and uses only constant extra space.

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [2,3]

// Example 2:

// Input: nums = [1,1,2]
// Output: [1]

// Example 3:

// Input: nums = [1]
// Output: []

// Constraints:

// n == nums.length
// 1 <= n <= 105
// 1 <= nums[i] <= n
// Each element in nums appears once or twice.

// Create function that takes in array
  // Create result empty array
  // Create number object
    // Create a for loop to move through the input array and add each number to an object
      // If number already exists in object add it to results array
      // else add it to object
    //
  // return results array
//

const findAllDupsInArray = (inputArray) => {
  let result = []
  let numberHash = {}
  for (let index = 0; index < inputArray.length; index += 1) {
    if (numberHash[inputArray[index]]) {
      result.push(inputArray[index])
    } else {
      numberHash[inputArray[index]] = true
    }
  }
  return result
}

console.log(findAllDupsInArray([4, 3, 2, 7, 8, 2, 3, 1]))
console.log(findAllDupsInArray([1, 1, 2]))
console.log(findAllDupsInArray([1]))