// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// adjacentElementsProduct(inputArray) = 21.

// 7 and 3 produce the largest product.

const adjacentElementsProduct = function (inputArray) {
  let result = [inputArray[0] * inputArray[1]]

  for (let i = 0; i < inputArray.length - 1; i += 1) {
    let currentPair = inputArray[i] * inputArray[i + 1]
    if (currentPair > result) {
      result = currentPair
    }
  }
  return result
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]))