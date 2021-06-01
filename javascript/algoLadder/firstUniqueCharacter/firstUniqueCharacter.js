// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// NOTE: You must accomplish this in O(n) time. This is also known as linear time.

// Examples:

// s = "leetcode"
// return 0.
// (The "l" is the first character that only appears once in the string, and appears at index 0.)

// s = "loveleetcode",
// return 2.
// (The "l" and "o" are repeated, so the first non-repeating character is the "v", which is at index 2.)

// Note: You may assume the string contain only lowercase letters.

const firstUniqueCharacter = function (string) {
  let stringAsHash = {}

  for (let i = 0; i < string.length; i += 1) {
    if (!stringAsHash[string[i]]) {
      stringAsHash[string[i]] = 1
    } else {
      stringAsHash[string[i]] += 1
    }
  }

  // Returns the letter rather than the index
  // for (let number in stringAsHash) {
  //   if (stringAsHash[number] === 1) {
  //     return number
  //   }
  // }
  
  // Returns index but is not O(N) due to calling indexOf
  //  for (let number in stringAsHash) {
  //   if (stringAsHash[number] === 1) {
  //     return string.indexOf(number);
  //   }
  //  }

  for (let j = 0; j < string.length; j += 1) {
  let char = string.charAt(j)
    if (stringAsHash[char] === 1) {
      return j
    }
  }

  return -1
}

console.log(firstUniqueCharacter("loveleetcode"))