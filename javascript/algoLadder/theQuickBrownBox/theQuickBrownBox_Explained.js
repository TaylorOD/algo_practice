// Write a function that accepts a string that contains all the letters of the alphabet except one and returns the missing letter.

// Input:
// "the quick brown box jumps over the lazy dog"

// Output:
// "f"

// The function should have a time complexity of O(N)

// Create the function that takes in our input array
const theQuickBrownBox = function (inputString) {
  // Create a string that stores each letter of the alphabet
  let alphabet = "abcdefghijklmnopqrstuvwxyz"
  // Create a empty hash that we will use to store the input string values
  let inputStringAsHash = {}
  // Create a for loop that
  for (let i = 0; i < inputString.length; i += 1) {
    // If the current inputString element being looped over is not included in our hash than add it.
    if (!inputStringAsHash[inputString[i]]) {
      inputStringAsHash[inputString[i]] = true
    }
  }
  // Create a second for loop
  for (let j = 0; j < inputString.length; j += 1) {
    // If the current letter of the alphabet being looped over is not included in the inputString hash then return it
    // There is only supposed to be one missing character so we can return it as soon as we find it
    if (!inputStringAsHash[alphabet[j]]) {
      return alphabet[j]
    }
  }
}
// Call the function with the givin test input
console.log(theQuickBrownBox("the quick brown box jumps over the lazy dog"))

// Time complexity is O(N)