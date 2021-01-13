// Find the largest product of any two numbers within a given array.

// Input: [5, -2, 1, -9, -7, 2, 6]
// Output: 63 (-9 * -7)

// Create a function that takes in an array
const largestProduct = function (array) {
  // Create a result variable that is equal to the first two items in our array product
  let result = array[0] * array[1]
  // Create a for loop that will run the length of the array less one
  for (let i = 0; i < array.length - 1; i += 1) {
    // If the array[i] and array[i + 1] product are greater than our results var let them be our new result var
      if (array[i] * array[i + 1] > result) {
        result = array[i] * array[i + 1]
    }
  }
  // Return the result var
  return result
}
// Call the function with the given test input
console.log(largestProduct([5, -2, 1, -9, -7, 2, 6]))