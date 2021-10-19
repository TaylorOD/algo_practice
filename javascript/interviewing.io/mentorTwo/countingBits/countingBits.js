// https://leetcode.com/problems/counting-bits/

// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

// Example 1:

// Input: n = 2
// Output: [0,1,1]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10

// Example 2:

// Input: n = 5
// Output: [0,1,1,2,1,2]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101

// Constraints:

// 0 <= n <= 105

// Taylor Attempt:
const countingBits = (inputNumber) => {
  let results = []
  for (let index = 0; index <= inputNumber; index += 1) {
    results.push(Number(index.toString(2).replace(/0/g, "").length))
  }
  return results
}

console.log(countingBits(2))
console.log(countingBits(5))

// Leetcode Solution:
// Create a function that takes in a number
const countingBits2 = (inputNumber) => {
  // Create a bits array
  let bits = [];
  // Create a for loop where we move through out number
  for (let index = 0; index <= inputNumber; index += 1)
    // Convert index to binary using toString(2)
    // Convert that to a number using Number
    // remove 0 from bits using replace (syntax loops funny)
    // Call .length to sum the number of 1s to get if it is 1 or 2
    bits.push(Number(index).toString(2).replace(/0/g, "").length)
  return bits;
}

console.log(countingBits2(2))
console.log(countingBits2(5))