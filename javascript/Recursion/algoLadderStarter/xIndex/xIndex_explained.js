// Write a recursive function that accepts a string and returns the first index that contains the character "x".
// You can assume there will be at least one "x"
// Example:
// Input:
// "abcdefghijklmnopqrstuvwxyz"
// Output:
// 22

// Create function that takes in an inputString
const xIndex = function (inputString) {
  // If the selected character is x then return 0 - base case
  if (inputString[0] === "x") {
    return 0
  }
  // Otherwise call our function recursively, remove one character from the front, and add 1 to our count
  return xIndex(inputString.slice(1)) + 1
}
// Call our function with two test cases
console.log(xIndex("abcdefghijklmnopqrstuvwxyz"))
console.log(xIndex("zzx"))
