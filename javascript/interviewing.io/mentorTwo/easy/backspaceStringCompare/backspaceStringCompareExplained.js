// https://leetcode.com/problems/backspace-string-compare/

// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

// Example 1:

// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".

// Example 2:

// Input: s = "ab##", t = "c#d#"
// Output: true
// Explanation: Both s and t become "".

// Example 3:

// Input: s = "a##c", t = "#a#c"
// Output: true
// Explanation: Both s and t become "c".

// Example 4:

// Input: s = "a#c", t = "b"
// Output: false
// Explanation: s becomes "c" while t becomes "b".

// Constraints:

// 1 <= s.length, t.length <= 200
// s and t only contain lowercase letters and '#' characters.

// Create a function that takes in two string inputs
const backspaceStringCompare = (inputStringOne, inputStringTwo) => {
  // Create two empty string inputs
  let correctedStringOne = ""
  let correctedStringTwo = ""
  // Create two for loops that both move through the array and check for backspaces. If they exist then remove the last character added to the string.
  for (let index = 0; index < inputStringOne.length; index += 1) {
    if (inputStringOne[index] === "#") {
      correctedStringOne = correctedStringOne.slice(0, - 1)
    } else {
      correctedStringOne += inputStringOne[index]
    }
  }
  for (let index = 0; index < inputStringTwo.length; index += 1) {
    if (inputStringTwo[index] === "#") {
      correctedStringTwo = correctedStringTwo.slice(0, - 1)
    } else {
      correctedStringTwo += inputStringTwo[index]
    }
  }
  // Check the two strings. If they are the same then return true
  if (correctedStringOne == correctedStringTwo) {
    return true
  } else {
    // Otherwise return false
    return false
  }
}
// Call our function with test inputs
console.log(backspaceStringCompare("ab#c", "ad#c"))
console.log(backspaceStringCompare("ab##", "c#d#"))
console.log(backspaceStringCompare("a##c", "#a#c"))
console.log(backspaceStringCompare("a#c", "b"))
