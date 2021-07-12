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

const fibonacciExpert = function (number, memo = {1: 0, 2: 1}) {
  if (number in memo) {
    return memo[number]
  } else {
    memo[number] = fibonacciExpert(number - 2, memo) + fibonacciExpert(number - 1, memo)
  }
  return memo[number]
}

console.log(fibonacci(9))
console.log(fibonacci(10))

console.log(fibonacciExpert(9))
console.log(fibonacciExpert(10))

// Write a function that gives the Nth number of the Fibonacci Sequence

const fibonacci = function (number) {
  let numberOne = 0
  let numberTwo = 1
  let result = undefined

  for (let i = 0; i < number; i += 1) {
    result = numberOne + numberTwo
    numberOne = numberTwo
    numberTwo = result
  }
  return numberOne
}
console.log(fibonacci(7))