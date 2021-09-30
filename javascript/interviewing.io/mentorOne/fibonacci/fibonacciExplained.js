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

// Create a function that takes in a number
const fibonacci = (number) => {
  // Create the first and second number
  let numberOne = 0
  let numberTwo = 1
  // Create a result variable
  let result = undefined
  // Create a for loop
  for (let index = 0; index < number; index += 1) {
    // Make the result equal to both numbers combined
    result = numberOne + numberTwo
    // Let numberOne equal numberTwo
    numberOne = numberTwo
    // Let numberTwo equal the result
    numberTwo = result
  }
  // Return numberOne
  return numberOne
}

console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(4))

// Create function that takes in number
const fibonacciRecursion = (number) => {
  // Create memo hash
  let memo = {}
  // Create helper function that we will run recursivly
  const fibHelper = (helperNumber) => {
    // If the number exists in memo then return it
    if (memo[helperNumber]) {
      return memo[helperNumber]
    }
    // If the number is 1 or 0 then return it
    if (helperNumber == 1 || helperNumber == 0) {
      return helperNumber
    }
    // Otherwise add helper - 1 + helper - 2 to memo
    return (memo[helperNumber] = fibHelper(helperNumber - 1) + fibHelper(helperNumber - 2))
  }
  // Call our recursive function
  return fibHelper(number)
}

console.log(fibonacciRecursion(2))
console.log(fibonacciRecursion(3))
console.log(fibonacciRecursion(4))