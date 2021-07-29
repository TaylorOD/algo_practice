// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Example 1:

// Input: s = "()"
// Output: true

// Example 2:

// Input: s = "()[]{}"
// Output: true

// Example 3:

// Input: s = "(]"
// Output: false

// Example 4:

// Input: s = "([)]"
// Output: false

// Example 5:

// Input: s = "{[]}"
// Output: true

// Create a function that takes in a string of Parentheses
const validParentheses = function (inputString) {
  // Create a stack which will start as an empty array
  const stack = []
  // Create a map of the Parentheses closing brackets as keys
  const validMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  }
  // Create a for of loop to iterate over our string
  for (let character of inputString) {
    // If the element is not a closing tag then add it to our stack
    if (!validMap[character]) {
      stack.push(character)
      // Else if poping from our stack doesnt have a match then return false
    } else if (stack.pop() !== validMap[character]) {
      return false
    }
  }
  // Return once the stack has hit zero items.
  // If there are no falses then true will be returned
  return stack.length === 0
}
// Call our function with test inputs
console.log(validParentheses("()"))
console.log(validParentheses("()[]{}"))
console.log(validParentheses("(]"))
console.log(validParentheses("([)]"))
console.log(validParentheses("{[]}"))
