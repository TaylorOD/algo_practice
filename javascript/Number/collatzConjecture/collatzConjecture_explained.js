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

// Create function that takes in input number
const collatzConjecture = function (number) {
  // Create a variable that we will use to store even results
  let numberHalved = 0
  // Create a variable that we will use to store odd results
  let numberMultipliedByThree = 0
  // Create variable that will represent the input number that we can use in out while loop
  let currentNumber = number
  // Create variable that we will increment on each loop
  let counter = 0

  // Create while loop that will run until the number hits 1
  while (currentNumber > 1) {
    // If statement that will run if the current number is even
    if (currentNumber % 2 === 0) {
      // If the currentNumber is even make numberHalved equal to the currentNumber divided by 2
      numberHalved = currentNumber / 2
      // Current number is now equal to numberHalved
      currentNumber = numberHalved
      // Increment the counter
      counter += 1
      // Else if statement that runs if the currentNumber is odd
    } else if (currentNumber % 2 === 1) {
      // numberMultiplied is now equal to the current number multiplied by 3 + 1
      numberMultipliedByThree = (currentNumber * 3) + 1
      // CurentNumber is equal to numberMultipliedByThre
      currentNumber = numberMultipliedByThree
      // Increment the counter
      counter += 1
    }
  }
  // Return the counter variable which will be the number of steps we took to get to 1
  return counter
}
// Call the function with a test input
console.log(collatzConjecture(12))