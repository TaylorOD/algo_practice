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

const commonPrefix = function (inputArrayOfStrings) {
  
  if (inputArrayOfStrings.length === 0) {
    return ""
  }

  for (let i = 0; i < inputArrayOfStrings[0].length; i += 1) {
    for (let j = 0; j < inputArrayOfStrings.length; j += 1) {
      if (inputArrayOfStrings[j][i] !== inputArrayOfStrings[0][i]) {
        if (inputArrayOfStrings[j].slice(0, i).length === 0) {
          return ""
        } else {
          return inputArrayOfStrings[j].slice(0, i)
        }
      }
    }
  }
  return inputArrayOfStrings[0]
}

console.log(commonPrefix(["flower", "flow", "flight"]))
console.log(commonPrefix(["dog","racecar","car"]))