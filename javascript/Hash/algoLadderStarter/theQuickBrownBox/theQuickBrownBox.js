// Write a function that accepts a string that contains all the letters of the alphabet except one and returns the missing letter.

// Input:
// "the quick brown box jumps over the lazy dog"

// Output:
// "f"

// The function should have a time complexity of O(N)

const theQuickBrownBox = function (inputString) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz"
  let inputStringAsHash = {}

  for (let i = 0; i < inputString.length; i += 1) {
    if (!inputStringAsHash[inputString[i]]) {
      inputStringAsHash[inputString[i]] = true
    }
  }
  for (let j = 0; j < inputString.length; j += 1) {
    if (!inputStringAsHash[alphabet[j]]) {
      return (alphabet[j])
    }
  }
}

console.log(theQuickBrownBox("the quick brown box jumps over the lazy dog"))