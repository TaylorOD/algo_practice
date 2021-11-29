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

// Create a function that takes in an inputNumber
const countingBits = (inputNumber) => {
  // Create a results empty array
  let results = []
  // Create a for loop that will move through our number
  for (let index = 0; index <= inputNumber; index += 1) {
    // Convert out number to binary using toString(2)
    // Convert that to a number using Number
    // Remove the 0's using .replace
    // and convert to 2s or 1s using .length
    // then push to results array
    results.push(Number(index.toString(2).replace(/0/g, "").length))
  }
  // Return results array
  return results
}

console.log(countingBits(2))
console.log(countingBits(5))
