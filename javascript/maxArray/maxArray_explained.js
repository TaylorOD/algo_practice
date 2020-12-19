// Return the greatest value from an array of numbers.

// Input: [5, 17, -4, 20, 12, 1000]
// Output: 20

// Create function that takes in array
const maxArray = function (array) {
  // Create variable to represent the largest item in the array which starts as the first value in the array
  let largest = array[0]
  // Create for loop to loop over each item so we can access each item in the array
  for (let i = 0; i < array.length; i += 1) {
    // Create an if statement that will replace largest with the item currently being looped over in the array
    if (array[i] > largest) {
      largest = array[i]
    }
  }
  // return the largest array
  return largest
}
// Call the array with the given input
console.log(maxArray([5, 17, -4, 20, 12, 1000]))