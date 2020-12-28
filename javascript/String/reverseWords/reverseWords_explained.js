// Given a string of words, return a new string that contains the words in reverse order.

// Input: “popcorn is so cool isn’t it yeah i thought so”
// Output: “so thought i yeah it isn’t cool so is popcorn”

// Create function that takes in a string
const reverseWords = function (string) {
  // Split string and create new variable
  let splitString = string.split(" ")
  // Reverse the split string and create it as a new variable
  let reversedSplitString = splitString.reverse()
  // Join the split string back together and save it as a new variable
  let joinedReversedString = reversedSplitString.join(" ")
  // Return the split string
  return joinedReversedString
}

// Call the function with the test input string
console.log(reverseWords("popcorn is so cool isn’t it yeah i thought so"))