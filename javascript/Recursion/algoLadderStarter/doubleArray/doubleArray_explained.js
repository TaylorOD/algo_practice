// Write a recursive function that takes in an array of numbers and doubles each number in place

// Create a function that takes in an array and creates an index
const doubleArray = function (inputArray, index = 0) {
  // If the index passed in is greater than or equal to the inputArray length then print the array and cease the loop/function
  if (index >= inputArray.length) {
    console.log(inputArray)
    return
  }
  // Double the current element in the input array
  inputArray[index] *= 2
  // Call the doubleArray function with the updated input array and increment the index
  doubleArray(inputArray, index + 1)
}
// Call the recursive function with our test input array
doubleArray([1, 2, 3, 4, 5])
