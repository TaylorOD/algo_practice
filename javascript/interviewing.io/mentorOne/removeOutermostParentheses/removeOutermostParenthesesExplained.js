// https://leetcode.com/problems/remove-outermost-parentheses/

// A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.

// For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
// A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings.

// Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.

// Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.

// Example 1:

// Input: s = "(()())(())"
// Output: "()()()"
// Explanation:
// The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
// After removing outer parentheses of each part, this is "()()" + "()" = "()()()".

// Example 2:

// Input: s = "(()())(())(()(()))"
// Output: "()()()()(())"
// Explanation:
// The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
// After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".

// Example 3:

// Input: s = "()()"
// Output: ""
// Explanation:
// The input string is "()()", with primitive decomposition "()" + "()".
// After removing outer parentheses of each part, this is "" + "" = "".

// Constraints:

// 1 <= s.length <= 105
// s[i] is either '(' or ')'.
// s is a valid parentheses string.

// Create a function that takes in a string
// Create result array
// Create parArray
// Create a for loop that moves through the string
// if string[index] === "("
// add ( to parArray
// else if string[index] === ")"
// pop from parArray
//
//
// for loop length of result array
// if parArray[index] === "("
// result.push("(")
// result.push(")")
//
//

// return result array
//

// Taylor Attempt:
const removeOuterParentheses = (string) => {
  let result = []
  let parArray = []
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === "(") {
      parArray.push("(")
    } else if (parArray[index] === "(") {
    }
  }
  for (let index = 0; index < parArray.length; index += 1) {
    if (parArray[index] === "(") {
      result.push("()")
    }
  }
  return result
}

console.log(removeOuterParentheses("(()())(())"))
console.log(removeOuterParentheses("(()())(())(()(()))"))
console.log(removeOuterParentheses("()()"))

// Leetcode Solution:
// Create a function that takes in a string
const removeOuterParentheses2 = (string) => {
  // Create an empty string to store our results
  let result = ""
  // Create a count for our open Parentheses
  let openPar = 0
  // Create a for loop to move through the string
  for (let index = 0; index < string.length; index += 1) {
    // If the string is an open par
    if (string[index] === "(") {
      // And open par is greater than 0
      if (openPar > 0) {
        // Add an opening par to the result string
        result += "("
      }
      // Increment the openPar variable
      openPar += 1
      // Else if the string is a closing par
    } else if (string[index] === ")") {
      // If the openPar is greater that 1
      if (openPar > 1) {
        // Add a closing par to the result string
        result += ")"
      }
      // Decrement the openPar variable
      openPar -= 1
    }
  }
  // Return the result string
  return result
}

console.log(removeOuterParentheses2("(()())(())"))
console.log(removeOuterParentheses2("(()())(())(()(()))"))
console.log(removeOuterParentheses2("()()"))
