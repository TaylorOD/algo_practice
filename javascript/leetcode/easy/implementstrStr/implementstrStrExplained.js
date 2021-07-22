// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2

// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

// Example 3:

// Input: haystack = "", needle = ""
// Output: 0

// Create function that takes in needle and haystack
// if needle is empty return 0
// for loop
// if haystack[index] === needle[0] - Need to address length of needle/full needle here
// return index
//
//
// return -1
//

const implementstrStr = function (haystack, needle) {
  if (needle === "") {
    return 0
  }
  for (let index = 0; index < haystack.length; index += 1) {
    if (haystack.substr(index, needle.length) === needle) {
      return index
    }
  }
  return -1
}

console.log(implementstrStr("hello", "ll"))
console.log(implementstrStr("aaaaa", "bba"))
console.log(implementstrStr("", ""))
