// Write a recursive function that takes in an array of strings and return the total number of characters across all the strings.
// Example:
// Input:
// ["ab", "c", "def", "ghij"]
// Output:
// 10

const allCharacters = function (inputArray) {
  if (inputArray.length === 1) {
    return inputArray[0].length
  }
  return inputArray[0].length + allCharacters(inputArray.splice(1))
}

console.log(allCharacters(["ab", "c", "def", "ghij"]))