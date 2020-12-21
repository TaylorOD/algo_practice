// Given an array of numbers, return a new array in which only select numbers from the original array are included, based on the following details:

// The new array should always start with the first number from the original array. The next number that should be included depends on what the first number is. The first number dictates how many spaces to the right the computer should move to pick the next number. For example, if the first number is 2, then the next number that the computer should select would be two spaces to the right. This number gets added to the new array. If this next number happens to be a 4, then the next number after that is the one four spaces to the right. And so on and so forth until the end of the array is reached.

// Input:
// [2, 1, 3, 2, 5, 1, 2, 6, 2, 7, 1, 5, 6, 3, 2, 6, 2, 1, 2]

// Output:
// [2, 3, 1, 2, 2, 1, 5, 2, 2]

// Create function that takes in an input array
const skipIt = function (array) {
  // Create a results empty array
  let result = []
  // Create a for loop that increments by the current item in the array
  for (let i = 0; i < array.length; i += array[i]) {
    // Add each index element to the results array
    result.push(array[i])
  }
  // return the results array
  return result
}
// Call the skipIt function with the givin input array
console.log(skipIt([2, 1, 3, 2, 5, 1, 2, 6, 2, 7, 1, 5, 6, 3, 2, 6, 2, 1, 2]))