// Write a recursive function that takes in an array and returns the sum of the array

// Create function that takes in an input array
const arraySum = function (inputArray) {
  // Create out base case - If the length of the input array is 1 then return the inputArray[0] - We will add to this value below
  if (inputArray.length === 1) {
    return inputArray[0]
  }
  // If the inputArray.length doesnt === 1 then call the function recursively again and remove the last item from the array.
  // We are also adding the result to our inputArray[0]
  return inputArray[0] + arraySum(inputArray.splice(1))
}
// Call the function with the test input
console.log(arraySum([1, 2, 3, 4, 5]))
