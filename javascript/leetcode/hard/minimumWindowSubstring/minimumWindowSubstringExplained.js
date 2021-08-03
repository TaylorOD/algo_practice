// Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

// A substring is a contiguous sequence of characters within the string.

 // Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.

// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.

const minimumWindowSubstring = function (string, substring) {
  var answer = ""

  // 1. process hashmap
  var map = {}
  substring.split("").forEach((character) => (map[character] = (map[character] || 0) + 1))
  var count = Object.keys(map).length

  // 2. traverse string to find boundaries
  // both left & right are inclusive
  var left = 0
  var right = -1

  while (right < string.length) {
    if (count === 0) {
      // good condition
      // left~right contains substring

      // update answer
      if (!answer || right - left + 1 < answer.length) {
        answer = string.slice(left, right + 1)
      }

      // get rid of current character and then move left
      if (map[string[left]] !== undefined) {
        map[string[left]]++
      }
      if (map[string[left]] > 0) {
        count++
      }
      left++
    } else {
      // bad condition
      // left~right doesn't contain substring

      // move right and add new character
      right++
      if (map[string[right]] !== undefined) {
        map[string[right]]--
      }
      if (map[string[right]] === 0) {
        count--
      }
    }
  }
  return answer
}

console.log(minimumWindowSubstring("ADOBECODEBANC", "ABC"))
console.log(minimumWindowSubstring("a", "a"))
console.log(minimumWindowSubstring("a", "aa"))