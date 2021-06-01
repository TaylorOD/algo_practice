// Given two arrays of strings, return a new string that contains every combination of a string f
// rom the first array concatenated with a string from the second array.

// Input: ["a", "b", "c"], ["d", "e", "f", "g"]
// Output: ["ad", "ae", "af", "ag", "bd", "be", "bf", "bg", "cd", "ce", "cf", "cg"]

// Create an array that takes in two input strings
const arrayMesh = function (arrayOne, arrayTwo) {
  // Create a results variable to store our combined strings
  let result = []

  // Create a for loop that will loop over the length of arrayOne
  for (let i = 0; i < arrayOne.length; i += 1) {
    // Create a for loop that will loop over the length of arrayTwo
    for (let j = 0; j < arrayTwo.length; j += 1) {
      // Add the first element of array one with the first element of array two to the results array and continue
      result.push(arrayOne[i] + arrayTwo[j])
    }
  }
  // Return the results array
  return result
}
// Call the function with the input strings
console.log(arrayMesh(["a", "b", "c"], ["d", "e", "f", "g"]))