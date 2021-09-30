// https://leetcode.com/problems/fibonacci-number/

// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

// Example 1:

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

// Example 2:

// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

// Example 3:

// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

const fibonacci = (number) => {
  let numberOne = 0
  let numberTwo = 1
  let result = undefined
  for (let index = 0; index < number; index += 1) {
    result = numberOne + numberTwo
    numberOne = numberTwo
    numberTwo = result
  }
  return numberOne
}

console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(4))

const fibonacciRecursion = (number) => {
  let memo = {}
  const fibHelper = (helperNumber) => {
    if (memo[helperNumber]) {
      return memo[helperNumber]
    }
    if (helperNumber == 1 || helperNumber == 0) {
      return helperNumber
    }
    return (memo[helperNumber] = fibHelper(helperNumber - 1) + fibHelper(helperNumber - 2))
  }
  return fibHelper(number)
}

console.log(fibonacciRecursion(2))
console.log(fibonacciRecursion(3))
console.log(fibonacciRecursion(4))