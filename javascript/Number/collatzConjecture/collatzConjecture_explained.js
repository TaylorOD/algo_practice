// The Collatz Conjecture or 3x+1 problem can be summarized as follows:

// Take any positive integer n. 
// If n is even, divide n by 2 to get n / 2. If n is odd, multiply n by 3 and add 1 to get 3n + 1. 
// Repeat the process indefinitely. The conjecture states that no matter which number you start with, you will always reach 1 eventually.

// Given a number n, return the number of steps required to reach 1.

// Examples
// Starting with n = 12, the steps would be as follows:

// input = 12

// 6
// 3
// 10
// 5
// 16
// 8
// 4
// 2
// 1

// Resulting in 9 steps. So for input n = 12, the return value would be 9.


const collatzConjecture = function (number) {
  let numberHalved = 0
  let numberMultipliedByThree = 0
  let currentNumber = number
  let counter = 0

  while (currentNumber > 1) {
    if (currentNumber % 2 === 0) {
      numberHalved = currentNumber / 2
      currentNumber = numberHalved
      counter += 1
    } else if (currentNumber % 2 === 1) {
      numberMultipliedByThree = (currentNumber * 3) + 1
      currentNumber = numberMultipliedByThree
      counter += 1
    }
  }
  return counter
}

console.log(collatzConjecture(12))