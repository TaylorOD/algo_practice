// The Fibonacci sequence is a mathematical sequence of numbers that goes like this until infinity:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
// Each subsequent number is the sum of the previous two numbers in the sequence.
// Write a recursive function that will give you the Nth number when N is passed in.
// Example:
// Input:
// 9
// Output:
// 34

// Create a function that takes in an input number and creates a hash for storing already run fibonacci calls, memo.
const fibonacci = function (number, memo = {}) {
  // If the number is 0 or 1 then return the number - Base case
  if (number === 0 || number === 1) {
    return number
  }
  // Check to see if the number exists in memo. If the number does not exist in memo then create it.
  if (!memo[number]) {
    memo[number] = fibonacci(number - 2, memo) + fibonacci(number - 1, memo)
  }
  // If it does exist then return memo[number] since we've already stored that fibonacci recursive call.
  // This makes our function closer to O(N) than 0(N^2)
  return memo[number]
}
// Call our function with two test inputs
console.log(fibonacci(9))
console.log(fibonacci(10))
