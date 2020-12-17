// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// adjacentElementsProduct(inputArray) = 21.

// 7 and 3 produce the largest product.

// Create function that takes in an array
const adjacentElementsProduct = function (inputArray) {
  // Create result array that contains the product of the first two inputs
  let result = [inputArray[0] * inputArray[1]]

  // Create for loop to loop through each input in the array. It stops at array.length - 1 because we are using i + 1 as an input below
  for (let i = 0; i < inputArray.length - 1; i += 1) {
    // create value for current pair to be compares to result array. This is inputArray[i] * inputArray[i + 1] which will always be next to each other
    let currentPair = inputArray[i] * inputArray[i + 1]
    // if the current pair is larger than the result the result is now the current pair
    if (currentPair > result) {
      result = currentPair
    }
  }
  // return the result
  return result
}
// call the function with the test input array
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]))