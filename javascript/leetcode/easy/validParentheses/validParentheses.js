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

const validParentheses = function (inputString) {
  const stack = []
  const validMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  }

  for (let character of inputString) {
    if (!validMap[character]) {
      stack.push(character)
    } else if (stack.pop() !== validMap[character]) {
      return false
    }
  }
  return stack.length === 0
}

console.log(validParentheses("()"))
console.log(validParentheses("()[]{}"))
console.log(validParentheses("(]"))
console.log(validParentheses("([)]"))
console.log(validParentheses("{[]}"))