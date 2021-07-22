// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

// O(n)
// Create a function that takes in a number
function fibonacciIterative(n) {
  // Create an array that we will use to store each element of the fib sequence. Start it with 0 and 1
  let fibonacciArray = [0, 1]
  // Create a for loop starting at 2 and running until index is equal to n
  for (let index = 2; index <= n; index += 1) {
    // Add index - 1 and index - 2 to the array for each number and increment up until our n
    fibonacciArray.push(fibonacciArray[index - 1] + fibonacciArray[index - 2])
  }
  // Call our array with the value of n
  return fibonacciArray[n]
}

// O(n^2)
// Create a function that takes in n
function fibonacciRecursive(n) {
  // If n is equal to 0 or 1 then return n
  if (n === 0 || n === 1) {
    return n
  }
  // Otherwise call our function recursively with n - 1 and n - 2
  return (n = fibonacciRecursive(n - 2) + fibonacciRecursive(n - 1))
}
// Call both our functions with test cases
console.log(fibonacciIterative(7))
console.log(fibonacciRecursive(7))