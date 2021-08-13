// Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The test cases will be generated such that the answer is unique.

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

// Create answer string
// Map each string caracter to an object hash
// Create left and right index
// return answer

const minimumWindowSubstring = function (string, substring) {
  let answer = ""

  let map = {}
  substring.split("").forEach((character) => (map[character] = (map[character] || 0) + 1))
  let count = Object.keys(map).length

  let left = 0
  let right = -1
  while (right < string.length) {
    if (count === 0) {
      if (!answer || right - left + 1 < answer.length) {
        answer = string.slice(left, right + 1)
      }
      if (map[string[left]] !== undefined) {
        map[string[left]]+= 1
      }
      if (map[string[left]] > 0) {
        count += 1
      }
      left += 1
    } else {
      right += 1
      if (map[string[right]] !== undefined) {
        map[string[right]] -=1
      }
      if (map[string[right]] === 0) {
        count -= 1
      }
    }
  }

  return answer
}

console.log(minimumWindowSubstring("ADOBECODEBANC", "ABC"))
console.log(minimumWindowSubstring("a", "a"))
console.log(minimumWindowSubstring("a", "aa"))
