// Given a string, find the first occurrence of two duplicate characters in a row, and return the duplicated character.

// Input: “abcdefghhijkkloooop”
// Output: “h”

// Create findDupCharacters function that takes in a string
const findDupCharacters = function (string) {
  // Create index that we will use to loop through an array
  let index = 0
  // Create results string
  let result = ""

  // While index is less than the string length - 1 (We are going to compare the current item in the string with the one follow it so we use -1 so we dont hit errors at the end of the string)
  while (index < string.length - 1) {
    // If the string index item is equal to the one following it then...
    if (string[index] === string[index + 1]) {
      // Set the result string as the string[index] and return the result string
      result = string[index]
      return result
    }
    // Increment the index
    index += 1
  }
  // Return false if there is no duplicate found
  return false
}

// Call the findDupCharacters function with the givin input.
console.log(findDupCharacters("abcdefghhijkkloooop"))