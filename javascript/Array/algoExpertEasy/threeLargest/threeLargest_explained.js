// Write a function that takes in an array of at least three integers and, without sorting the array, returns a sorted array of the three largest numbers in the input array. The result array should return duplicates if needed.

// Create a function that takes in our inputArray
function findThreeLargestNumbers(inputArray) {
  // Create an array array of three null variables
  const threeLargest = [null, null, null]

  // Create a for of loop using the input array
  for (const number of inputArray) {
    // Call our helper function updateThreeLargest with inputs threeLargest (array), and number
    updateThreeLargest(threeLargest, number)
  }
  // Return threeLargest - this will be sorted by the time it is returned
  return threeLargest
}
// Create helper function updateThreeLargest that takes in the threeLargest array and a number
function updateThreeLargest(threeLargest, number) {
  // If threeLargest[2] is still null or number is greater than threeLargest[2] then call shift and update
  if (threeLargest[2] === null || number > threeLargest[2]) {
    // Shift and update is called with our three largest array, number, and the index (2)
    shiftAndUpdate(threeLargest, number, 2)
    // If three largest[2] is not called then check the other two against the input
  } else if (threeLargest[1] === null || number > threeLargest[1]) {
    shiftAndUpdate(threeLargest, number, 1)
  } else if (threeLargest[0] === null || number > threeLargest[0]) {
    shiftAndUpdate(threeLargest, number, 0)
  }
}
// Call our helper function shift and Update which will take in our threeLargestInput Array, number and index from updateThreeLargest
function shiftAndUpdate(threeLargestInputArray, number, index) {
  // Create a for loop that will run until equal to index
  for (let i = 0; i <= index; i += 1) {
    // If i is equal to index then threeLargestInputArray[i] = number
    if (i === index) {
      threeLargestInputArray[i] = number
      // Else threeLargestInputArray[i] is now equal to threeLargestInputArray[i + 1]
    } else {
      threeLargestInputArray[i] = threeLargestInputArray[i + 1]
    }
  }
}

// Call test input
console.log(findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]))