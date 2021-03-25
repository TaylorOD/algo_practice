// Write a function that reverses a string. The input string is given as an array of characters s.

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

var reverseStringFromArray = function (inputArray) {
  for (let [first, second] = [0, inputArray.length - 1]; first < second; first++, second--) {
    ;[inputArray[first], inputArray[second]] = [inputArray[second], inputArray[first]]
  }
  return inputArray
}

console.log(reverseStringFromArray(["h", "e", "l", "l", "o"]))
console.log(reverseStringFromArray(["H", "a", "n", "n", "a", "h"]))