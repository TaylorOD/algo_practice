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

// Create function that takes in inputString
const firstUniqueCharacter = function (string) {
  // Create an empty hash we will use to store our string characters and their count
  let stringAsHash = {}

  // Create a for loop that will loop through the string and create a key value pair for each character
  // If the character already exists it will increment the character's value
  for (let i = 0; i < string.length; i += 1) {
    if (!stringAsHash[string[i]]) {
      stringAsHash[string[i]] = 1
    } else {
      stringAsHash[string[i]] += 1
    }
  }

  // Create a for loop that will loop over the string
  for (let j = 0; j < string.length; j += 1) {
    // Create a var that stores the index of the character currently being looped through 
    let char = string.charAt(j)
    // If the Hash[char] is equal to 1 than return that index
    if (stringAsHash[char] === 1) {
      return j
    }
  }
  // Return -1 if no character is not Unique
  return -1
}
// Call the function with the givin input
console.log(firstUniqueCharacter("loveleetcode"))