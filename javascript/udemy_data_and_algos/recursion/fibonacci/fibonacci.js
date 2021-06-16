// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n) {
  let fibonacciArray = [0, 1]
  for (let index = 2; index <= n; index += 1) {
    fibonacciArray.push(fibonacciArray[index - 1] + fibonacciArray[index - 2])
  }
  return fibonacciArray[n]
}

function fibonacciRecursive(n) {
  if (n === 0 || n === 1) {
    return n
  }
  return n = fibonacciRecursive(n - 2) + fibonacciRecursive(n - 1)
}

console.log(fibonacciRecursive(7))
console.log(fibonacciIterative(7))