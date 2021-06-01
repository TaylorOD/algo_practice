// Find the largest product of any two numbers within a given array.

// Input: [5, -2, 1, -9, -7, 2, 6]
// Output: 63 (-9 * -7)

const largestProduct = function (array) {
  let result = array[0] * array[1]
  for (let i = 0; i < array.length - 1; i += 1) {
      if (array[i] * array[i + 1] > result) {
        result = array[i] * array[i + 1]
    }
  }
  return result
}

console.log(largestProduct([5, -2, 1, -9, -7, 2, 6]))