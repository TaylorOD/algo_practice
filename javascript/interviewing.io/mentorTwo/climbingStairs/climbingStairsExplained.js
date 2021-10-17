// https://leetcode.com/problems/climbing-stairs/

// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// Constraints:

// 1 <= n <= 45

// Create a function that takes in inputNumber
// let count = 0
// if number => 1 return count
// else
// return climbStairs(inputNumber - 1), climbStairs(numberNumber - 2)
//

// Create function that takes in stairs to be climbed
const climbStairs = (numberOfStairs) => {
  // Create a previous count. Start at 0 since we start at stair 1 and 0 stairs takes 0 steps
  let previousCount = 0
  // Create a currentCount. Start at one because we will start on stair 1 and 1 stair takes 1 step
  let currentCount = 1
  // Create a for loop. Use currentStair because it makes it easier to remember to start at 1
  for (let currentStair = 1; currentStair <= numberOfStairs; currentStair += 1) {
    // Update the current count by adding the previous count to it
    currentCount += previousCount
    // Update the previousCount by adding the current count - minus the old previous count (which we just added to current count)
    previousCount = currentCount - previousCount
  }
  // Return the current count once the loop kicks out
  return currentCount
}

// Call our function with multiple test variables
console.log(climbStairs(2))
console.log(climbStairs(3))
// console.log(climbStairs(34))
