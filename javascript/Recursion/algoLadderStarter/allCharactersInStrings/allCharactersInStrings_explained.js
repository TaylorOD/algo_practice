// Write a recursive function that takes in an array of strings and return the total number of characters across all the strings.
// Example:
// Input:
// ["ab", "c", "def", "ghij"]
// Output:
// 10

// Create function that takes in an input array
const allCharacters = function (inputArray) {
  // If the input array length is 1 then return inputArray[0].length which will be the last array length - Base case
  if (inputArray.length === 1) {
    return inputArray[0].length
  }
  // Otherwise return the inputArray length anf call our function removing one item from the string/array
  return inputArray[0].length + allCharacters(inputArray.splice(1))
}
// Call our function with out test input
console.log(allCharacters(["ab", "c", "def", "ghij"]))
