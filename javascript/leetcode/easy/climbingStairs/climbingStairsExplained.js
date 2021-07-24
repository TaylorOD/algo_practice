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

// Create a function that takes in a numberOfStairs
const climbingStairs = function (numberOfStairs) {
  // Create two variables that will serve as our starting points
  let previous = 0
  let current = 1
  // Create a for loop starting at 1 which will go until it equals the number of stairs
  for (let index = 1; index <= numberOfStairs; index += 1) {
    // Add the previous variable to the current variable
    current += previous
    // Update the previous variable to be what current was before but without previous added to it
    // We could also do this with a temp variable but I like it better this was
    previous = current - previous
  }
  // Return current since its the answer
  return current
}
// Call our function with test inputs
console.log(climbingStairs(2))
console.log(climbingStairs(3))
console.log(climbingStairs(13))
