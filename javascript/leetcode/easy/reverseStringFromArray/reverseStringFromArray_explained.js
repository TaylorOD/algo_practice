// Write a function that reverses a string. The input string is given as an array of characters s.

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

// Create a function that takes in an inputArray
var reverseStringFromArray = function (inputArray) {
  // Create a for loop where 0 and inputArray.length -1 are equated to first and second.
  // While first is less that second the loop runs.
  // First increments each loop and second decrements
  for (let [first, second] = [0, inputArray.length - 1]; first < second; first++, second--) {
    // InputArray[first], and inputArray[second] are set to equal each other. Effectively swapping the values.
    [inputArray[first], inputArray[second]] = [inputArray[second], inputArray[first]]
  }
  // Return our modified array
  return inputArray
}
// Call out function with multiple test cases
console.log(reverseStringFromArray(["h", "e", "l", "l", "o"]))
console.log(reverseStringFromArray(["H", "a", "n", "n", "a", "h"]))