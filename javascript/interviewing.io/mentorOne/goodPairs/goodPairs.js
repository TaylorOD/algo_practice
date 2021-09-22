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

// Add all numbers in inputnumbers to hashmap
// 1 if doesnt exist, += 1 if it does and increment the count by the number of its +=ed


// My attempt on my own:
const goodPairs = (inputNumbers) => {
  let map = {}
  let count = 0
  for (let index = 0; index < inputNumbers.length; index += 1) {
    if (!map[inputNumbers[index]]) {
      map[inputNumbers[index]] = 1
    } else {
      map[inputNumbers[index]] += 1
    }
  }
  for (let keys of inputNumbers) {
    if (keys === 2) {
      count += 1
    } else if (keys === 3) {
      count += 3
    } else if (keys === 4) {
      count += 6
    }
    // console.log(values)
  }
  // console.log(count)
  return map
  // return count

}

// console.log(goodPairs([1, 2, 3, 1, 1, 3]))
// console.log(goodPairs([1, 1, 1, 1]))
// console.log(goodPairs([1, 2, 3]))


const goodPairs2 = (inputNumbers) => {
  let map = {}
  let count = 0

  for (const number of inputNumbers) {
    if (map[number]) {
      count += map[number]
      map[number] += 1
    } else {
      map[number] = 1
    }
  }
  return count
}


console.log(goodPairs2([1, 2, 3, 1, 1, 3]))
console.log(goodPairs2([1, 1, 1, 1]))
console.log(goodPairs2([1, 2, 3]))