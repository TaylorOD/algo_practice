// Given a string, return a copy of the original string that has every other character capitalized. (Capitalization should begin with the second character.)

// Input: “hello, how are your porcupines today?”
// Output: “hElLo, HoW ArE YoUr pOrCuPiNeS ToDaY?”

// Create function that takes in a string
const alternateCapitals = function (string) {
  // Create index that we will use to loop through the array
  let index = 0
  // Create result string
  let result = ""
  // While index is less than the length of the input string
  while (index < string.length) {
    // If the index number is divisible by 2 with no remainder (checking for every other letter here since they will be even) than...
    if (index % 2 === 0) {
      // Add that letter to the results string upper cased
      result = result + string[index].toUpperCase()
      // Else just add that character to the string
    } else {
      result = result + string[index]
    }
    // Increment the index to continue through the array
    index += 1
  }
  // Return the result array
  return result
}
// Call the AlternateCapitals array with the givin input
console.log(alternateCapitals("hello, how are your porcupines today?"))