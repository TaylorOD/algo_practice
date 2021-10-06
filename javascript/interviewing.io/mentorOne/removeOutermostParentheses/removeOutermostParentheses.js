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
const removeOuterParentheses2 = (string) => {
  let result = ""
  let openPar = 0
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === "(") {
      if (openPar > 0) {
        result += "("
      }
      openPar += 1
    } else if (string[index] === ")") {
      if (openPar > 1) {
        result += ")"
      }
      openPar -= 1
    }
  }
  return result
}

console.log(removeOuterParentheses2("(()())(())"))
console.log(removeOuterParentheses2("(()())(())(()(()))"))
console.log(removeOuterParentheses2("()()"))