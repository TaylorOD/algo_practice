// Count the number of prime numbers less than a non-negative number, n.

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/102/math/744/

// Example 1:

// Input: n = 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
// Example 2:

// Input: n = 0
// Output: 0
// Example 3:

// Input: n = 1
// Output: 0

// Create a function that takes in an input number
  // Create an empty array that we will add each prime encountered to
  // Create a for loop that we will use to loop from 1 to our input number
    // Check if the number is divisible by anything other than itself using helper function
    // if not add it to our array
  // Return result array length
//

// Create helper function that takes in a number and checks if it is divisible by anything up to half of itself
  // Create a half variable which is 1/2 of input number
  // Create a for loop that will check if each number up to half is cleanly divisible
    // If not return false
  //
  // If so return input_number
//

const countPrimes = function (input_number) {
  let result = []
  for (let i = 0; i < input_number; i += 1) {
    if (primeHelper(i)) {
      result.push(i)
    }
  }
  return result.length
}

const primeHelper = function (potentialPrimeNumber) {
  let half = potentialPrimeNumber / 2
  for (let i = 2; i < half; i += 1) {
    if (!i % half === 0) {
      return false
    }
  }
  return potentialPrimeNumber
}

console.log(countPrimes(10))
console.log(countPrimes(0))
console.log(countPrimes(1))