// Given an array of positive numbers, write a function that returns the greatest product of any three numbers.
// The approach of using three nested loops would clock in at O(N^3) which is very slow. Use sorting to implement the function in a way that it computes at O(N log N).

const productOfThree = function (inputArray) {
  if (inputArray.length >= 3) {
    inputArray.sort((a, b) => a - b)
    let greatestProduct = inputArray[inputArray.length - 1] * inputArray[inputArray.length - 2] * inputArray[inputArray.length - 3]
    return greatestProduct
  } else {
    return "InputArray must have at least three element"
  }
}

console.log(productOfThree([1, 3, 2, 7, 9, 14, 12]))
console.log(productOfThree([1, 3,]))