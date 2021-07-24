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

const climbingStairs = function (numberOfStairs) {
  let previous = 0
  let current = 1

  for (let index = 1; index <= numberOfStairs; index += 1) {

    current += previous
    previous = current - previous

  }
  return current
}

console.log(climbingStairs(2))
console.log(climbingStairs(3))
console.log(climbingStairs(13))

// var climbStairs = function (n) {
//   // First two pointers store the first two numbers of the Fibonacci sequence
//   let prev = 0
//   let curr = 1

//   // We use a for loop to iterate from 1 up to our number n with our constraints  being: 1 <= n <= 45
//   for (let i = 1; i <= n; i++) {
//     // We store one side in our third pointer
//     tmp = prev
//     // We then update that side to be equal to the other pointer
//     // This is because the next number is equal to the sum of the previous two numbers.
//     prev = curr
//     // Next we add tmp which now holds our lower number to curr which holds our upper number to get our next number.
//     curr += tmp
//   }
//   // Outside of our loop we return curr which stored our cumulative total while we iterated.
//   return curr
// }