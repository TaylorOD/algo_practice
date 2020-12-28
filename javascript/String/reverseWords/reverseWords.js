// Given a string of words, return a new string that contains the words in reverse order.

// Input: “popcorn is so cool isn’t it yeah i thought so”
// Output: “so thought i yeah it isn’t cool so is popcorn”

const reverseWords = function (string) {
  let splitString = string.split(" ")
  let reversedSplitString = splitString.reverse()
  let joinedReversedString = reversedSplitString.join(" ")
  return joinedReversedString
}

console.log(reverseWords("popcorn is so cool isn’t it yeah i thought so"))