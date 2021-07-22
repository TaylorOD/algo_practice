// Useful for small data sets or nearly sorted data sets

// Create inputArray which we will sort
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

// Create our function that takes in an array
function insertionSort(inputArray) {
  // Create length variable to save on characters later
  const length = inputArray.length
  // Create a for loop that will loop through our array
  for (let indexOne = 0; indexOne < length; indexOne += 1) {
    // If the current item is smaller than the first item
    if (inputArray[indexOne] < inputArray[0]) {
      // Move item to first space
      inputArray.unshift(inputArray.splice(indexOne, 1)[0])
      // If not smaller
    } else {
      // Find where that number should go by looping again
      for (let indexTwo = 1; indexTwo < indexOne; indexTwo += 1) {
        // if check to see where number should go.
        // Then move that number there
        if (inputArray[indexOne] > inputArray[indexTwo - 1] && inputArray[indexOne] < inputArray[indexTwo]) {
          inputArray.splice(indexTwo, 0, inputArray.splice(indexOne, 1)[0])
        }
      }
    }
  }
}
// Call our function
insertionSort(numbers)
// Return our sorted numbers
console.log(numbers)
