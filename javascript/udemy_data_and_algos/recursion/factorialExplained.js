// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

// Create a function that takes in a number
function findFactorialRecursive(input_number) {
  // Create a result var that starts at 1 (we will be multiplying with it so it needs to start at one instead of zero)
  let result = 1
  // Create index_one which starts at two (our function will return the same input_number if we start it at 1 and this saves us a loop)
  let index_one = 2
  // Create an if check to return 2 if our input input_number is two since 2*1 is 2
  if (input_number === 2) {
    result = 2
  }
  // Create an if check to see if our index is less than to or equal to our input_number
  if (index_one <= input_number) {
    // If it is then the result variable is multiplied by the index
    result *= index_one
    // We increment our index
    index_one += 1
    // And we recursively call our function and decrement the input number by 1
    return input_number * findFactorialRecursive(input_number - 1)
  }
  // Return result
  return result
}
// Create a test function that takes in an input number
function findFactorialIterative(input_number) {
  // Create a result var that starts at 1
  let result = 1
  // Create an if check that returns 2 if 2 is passed in as the input number
  if (input_number === 2) {
    result = 2
  }
  // Create a while loop that runs as long as the index is less than or equal to the input number
  for (let index_one = 2; index_one <= input_number; index_one += 1) {
    // The result is multiplied by the index_one
    result *= index_one
  }
  // Return result
  return result
}
// Call both our functions with test inputs
console.log(findFactorialRecursive(5))
console.log(findFactorialIterative(5))
