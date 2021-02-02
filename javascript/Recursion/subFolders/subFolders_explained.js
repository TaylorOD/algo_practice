// This array containing both numbers as well as other arrays which in turn contain numbers and other arrays.
// Write a recursive function that prints all the numbers and just the numbers.

// Create function that takes in an array
const subFolders = function (inputArray) {
  // Create an each loop that will run for each element of the array
  inputArray.forEach(function (input) {
    // Create an if statement that will check if the current element is an array
    if (Array.isArray(input)) {
      // If so call our function recursively to print the numbers from the inner array
      subFolders(input)
      // Else print the number currently being looped over
    } else {
      console.log(input)
    }
  })
}
// I do not need to call our function using console.log() because we are not returning a response. All numbers are printed.
subFolders([
  1,
  2,
  3,
  [4, 5, 6],
  7,
  [8, [9, 10, 11, [12, 13, 14]]],
  [15, 16, 17, 18, 19, [20, 21, 22, [23, 24, 25, [26, 27, 29]], 30, 31], 32],
  33,
])
