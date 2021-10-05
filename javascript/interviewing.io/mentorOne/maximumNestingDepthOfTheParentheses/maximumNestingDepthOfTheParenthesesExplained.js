// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/

// A string is a valid parentheses string (denoted VPS) if it meets one of the following:

// It is an empty string "", or a single character not equal to "(" or ")",
// It can be written as AB (A concatenated with B), where A and B are VPS's, or
// It can be written as (A), where A is a VPS.
// We can similarly define the nesting depth depth(S) of any VPS S as follows:

// depth("") = 0
// depth(C) = 0, where C is a string with a single character not equal to "(" or ")".
// depth(A + B) = max(depth(A), depth(B)), where A and B are VPS's.
// depth("(" + A + ")") = 1 + depth(A), where A is a VPS.
// For example, "", "()()", and "()(()())" are VPS's (with nesting depths 0, 1, and 2), and ")(" and "(()" are not VPS's.

// Given a VPS represented as string s, return the nesting depth of s.
// It is guaranteed that parentheses expression s is a VPS.

// Example 1:

// Input: s = "(1+(2*3)+((8)/4))+1"
// Output: 3
// Explanation: Digit 8 is inside of 3 nested parentheses in the string.

// Example 2:

// Input: s = "(1)+((2))+(((3)))"
// Output: 3

// Example 3:

// Input: s = "1+(2*3)/(2-1)"
// Output: 1

// Example 4:

// Input: s = "1"
// Output: 0

// Create function that takes in a string
// Created nestedDepth var at 0
// Create Count vat at 0
// If string.length = 1 then return 0
// Create a for loop to loop through string
// If string character is ( then add ) to array - Increment count
// If string character is ) then remove item from array if there is one - Decrement count
// If character is !isNaN(string[index]) then set count to ND
// return nestedDepth
//

// Taylor attempt: Doesnt solve for + * - / signs but works otherwise
const maximumNestingDepthOfTheParentheses = (string) => {
  let nestedDepth = 0
  let count = 0
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === "(") {
      count += 1
      nestedDepth = Math.max(nestedDepth, count)
    } else if (string[index] === ")") {
      count -= 1
    }
  }
  return nestedDepth
}

console.log(maximumNestingDepthOfTheParentheses("(1+(2*3)+((8)/4))+1"))
console.log(maximumNestingDepthOfTheParentheses("(1)+((2))+(((3)))"))
console.log(maximumNestingDepthOfTheParentheses("1+(2*3)/(2-1)"))
console.log(maximumNestingDepthOfTheParentheses("1"))

// Leetcode Solution:
// Create a function that takes in a string
const maxDepth = function (string) {
  // Create a maxCount variable
  let maxCount = 0
  // Create a count variable
  let count = 0
  // Create a for loop that loops through the string
  for (let index = 0; index < string.length; index += 1) {
    // If the string has an opening par then make the maxCount the greater of maxCount or count with one added to it
    if (string[index] === "(") {
      count += 1
      maxCount = Math.max(maxCount, count)
      // If the string has a closing par than decrease the count
    } else if (string[index] === ")") {
      count -= 1
    }
  }
  // Return the max count
  return maxCount
}

console.log(maxDepth("(1+(2*3)+((8)/4))+1"))
console.log(maxDepth("(1)+((2))+(((3)))"))
console.log(maxDepth("1+(2*3)/(2-1)"))
console.log(maxDepth("1"))
