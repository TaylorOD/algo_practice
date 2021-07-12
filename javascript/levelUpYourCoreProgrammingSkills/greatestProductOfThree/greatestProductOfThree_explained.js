// Given an array of positive numbers, write a function that returns the greatest product of any three numbers.
// The approach of using three nested loops would clock in at O(N^3) which is very slow. Use sorting to implement the function in a way that it computes at O(N log N).

// Create our function that takes in an inputArray
const productOfThree = function (inputArray) {
  // If the inputArray length is 3 or greater than run our code
  if (inputArray.length >= 3) {
    // Sort our array using the javascript sort method
    inputArray.sort((a, b) => a - b)
    // Create a variable that will equal the greatest product by multiplying the last three element of the array
    let greatestProduct =
    inputArray[inputArray.length - 1] * inputArray[inputArray.length - 2] * inputArray[inputArray.length - 3]
    // Return that greatestProduct
    return greatestProduct
    // If our inputArray is not at least three element return a message explaining why the function will not run
  } else {
    return "InputArray must have at least three element"
  }
}
// Call our function with two test inputs
console.log(productOfThree([1, 3, 2, 7, 9, 14, 12]))
console.log(productOfThree([1, 3]))
