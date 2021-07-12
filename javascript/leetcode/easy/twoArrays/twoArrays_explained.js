// Given two arrays, write a function to compute their intersection.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]

// Problem: https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/674/

// Note:
// Each element in the result should appear as many times as it shows in both arrays.
// The result can be in any order.
// Follow up:

// What if the given array is already sorted? How would you optimize your algorithm?
// What if nums1's size is small compared to nums2's size? Which algorithm is better?
// What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

// const twoArrays = function (inputArrayOne, inputArrayTwo) {
//   let inputHash = {}
//   let results = []

//   for (let i = 0; i < inputArrayOne.length; i += 1) {

//     if (!inputHash[inputArrayOne[i]]) {
//       inputHash[inputArrayOne[i]] = 1
//     } else {
//       inputHash[inputArrayOne[i]] += 1
//     }
//   }

//   for (let j = 0; j < inputArrayTwo.length; j += 1) {
//     if (!inputHash[inputArrayTwo[j]]) {
//       inputHash[inputArrayTwo[j]] = 1
//     } else {
//       inputHash[inputArrayTwo[j]] += 1
//     }

//     if (inputHash[inputArrayTwo[j]] === 2) {
//       results.push(inputArrayTwo[j])
//     }
//   }
//   return results
// }

// console.log(twoArrays((nums1 = [1, 2, 2, 1]), (nums2 = [2, 2])))
// console.log(twoArrays((nums1 = [4, 9, 5]), (nums2 = [9, 4, 9, 8, 4])))


// Create a function that takes in two inputarrays
const intersect = (nums1, nums2) => {
  // Create a results array to store our results
  const results = []
  // Determine which array is shorter/longer and give it the appropriate length name
  const [short, long] = nums1.length <= nums2.length ? [nums1, nums2] : [nums2, nums1]

  // Create a for loop that loops over the length of the short array
  for (let i = 0; i < short.length; i++) {
    // Create a variable of the index the same element in the long array
    const id = long.indexOf(short[i])
    // If the id is greater than -1 then it exists in the long array
    if (id > -1) {
      // Add it to the results array
      results.push(short[i])
      // Remove it from the long array
      long.splice(id, 1)
    }
  }
  // REturn the results sorted
  return results.sort()
}
// Call our function with several test inputs
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]))
console.log(intersect([1, 2, 2, 1], [2, 2]))
console.log(intersect([3, 1, 2], [1, 1]))
console.log(intersect([4, 6, 1, 6, 6, 2], [1, 5, 5, 6, 1, 6, 1]))