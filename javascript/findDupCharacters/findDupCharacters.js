// Given a string, find the first occurrence of two duplicate characters in a row, and return the duplicated character.

// Input: “abcdefghhijkkloooop”
// Output: “h”

const findDupCharacters = function (string) {
  let index = 0
  let result = ""

  while (index < string.length - 1) {
    if (string[index] === string[index + 1]) {
      result = string[index]
      return result
    }
    index += 1
  }
  return false
}

console.log(findDupCharacters("abcdefghhijkkloooop"))