// Given an integer n, return true if it is a power of three. Otherwise, return false.

// An integer n is a power of three, if there exists an integer x such that n == 3x.

// Example 1:

// Input: n = 27
// Output: true

// Example 2:

// Input: n = 0
// Output: false

// Example 3:

// Input: n = 9
// Output: true

// Example 4:

// Input: n = 45
// Output: false

// Create a function take takes in a number
  // Create 1/3rd variable which is 1/3rd of the input number
  // Check if 1/3 to the power of three is the same as the input number
    // If so then return true
  //
  // Return false
//

const powerOfThree = function (input_number) {
  let result = Math.log(input_number) / Math.log(3)
  return Math.abs(result - Math.round(result)) < 1e-10
}

console.log(powerOfThree(27))
console.log(powerOfThree(0))
console.log(powerOfThree(9))
console.log(powerOfThree(45))