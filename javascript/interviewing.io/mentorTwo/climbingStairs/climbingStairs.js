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

const climbStairs = (numberOfStairs) => {
  let previousCount = 0
  let currentCount = 1
  for (let currentStair = 1; currentStair <= numberOfStairs; currentStair += 1) {
    currentCount += previousCount
    previousCount = currentCount - previousCount
  }
  return currentCount
}

console.log(climbStairs(2))
console.log(climbStairs(3))
// console.log(climbStairs(34))

const climbStairsDP = (numberOfStairs) => {
  let result = []
  result[0] = 1
  result[1] = 1
  for (let index = 2; index <= numberOfStairs; index += 1){
    result[index] = result[index - 1] + result[index - 2]
  }
  return result[numberOfStairs]
}

console.log(climbStairsDP(2))
console.log(climbStairsDP(3))
// console.log(climbStairs(34))