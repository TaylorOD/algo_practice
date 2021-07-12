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

//   for (var i = 0; i < inputArrayOne.length; i += 1) {
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

//     const indexInOne = inputArrayOne.indexOf(inputArrayOne[i])
//     const indexInTwo = inputArrayTwo.indexOf(inputArrayTwo[j])

//     if (inputHash[inputArrayOne[i]] >= 2 && indexInOne > -1) {
//       results.push(inputArrayOne[i])
//       inputHash[inputArrayOne[i]] = inputHash[inputArrayOne[i]] - 2
//       inputArrayOne.splice(indexInOne, 1)
//     }
//   }

//   return results
// }

// console.log(twoArrays((nums1 = [1, 2, 2, 1]), (nums2 = [2, 2])))
// console.log(twoArrays((nums1 = [4, 9, 5]), (nums2 = [9, 4, 9, 8, 4])))


const intersect = (nums1, nums2) => {
  const results = []
  const [short, long] = nums1.length <= nums2.length ? [nums1, nums2] : [nums2, nums1]

  for (let i = 0; i < short.length; i++) {
    const id = long.indexOf(short[i])
    if (id > -1) {
      results.push(short[i])
      long.splice(id, 1)
    }
  }

  return results.sort()
}

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]))
console.log(intersect([1, 2, 2, 1], [2, 2]))
console.log(intersect([3, 1, 2], [1, 1]))
console.log(intersect([4, 6, 1, 6, 6, 2], [1, 5, 5, 6, 1, 6, 1]))