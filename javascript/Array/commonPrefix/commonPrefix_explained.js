// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:

// All given inputs are in lowercase letters a-z.

// Create function that takes in an array of strings
const commonPrefix = function (inputArrayOfStrings) {
  // Create if condition that returns "" if the array is empty
  if (inputArrayOfStrings.length === 0) {
    return ""
  }
  // Create a for loop that will loop over the length of the first item in the array. 
  // Because we are comparing the prefixes we only need to loop over the length of 1 element in the array
  for (let i = 0; i < inputArrayOfStrings[0].length; i += 1) {
    // Create a second for loop that will loop over the full length of the array
    for (let j = 0; j < inputArrayOfStrings.length; j += 1) {
      // If the prefix of the first array is not equal to the prefix of the looped over array return "" or the prefixes that are the same
      if (inputArrayOfStrings[j][i] !== inputArrayOfStrings[0][i]) {
        // Return "" if there are no prefixes 
        if (inputArrayOfStrings[j].slice(0, i).length === 0) {
          return ""
        } else {
          // Return item currently being looped over with all the other letters removed but the amount incremented in our first for loop already
          return inputArrayOfStrings[j].slice(0, i)
        }
      }
    }
  }
  // Return in case of empty string or all equal strings
  return inputArrayOfStrings[0]
}
// Call the function with two test inputs
console.log(commonPrefix(["flower", "flow", "flight"]))
console.log(commonPrefix(["dog","racecar","car"]))