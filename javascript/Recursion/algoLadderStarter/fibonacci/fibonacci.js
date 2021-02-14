// The Fibonacci sequence is a mathematical sequence of numbers that goes like this until infinity:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
// Each subsequent number is the sum of the previous two numbers in the sequence.
// Write a recursive function that will give you the Nth number when N is passed in.
// Example:
// Input:
// 9
// Output:
// 34

const fibonacci = function (number, memo = {}) {
  if (number === 0 || number === 1) {
    return number
  }
  if (!memo[number]) {
    memo[number] = fibonacci(number - 2, memo) + fibonacci(number - 1, memo)
  }
  return memo[number]
}

console.log(fibonacci(9))
console.log(fibonacci(10))