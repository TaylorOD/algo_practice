// Given two strings of equal length, return the number of characters that are different between the two strings.

// Input: "ABCDEFG", "ABCXEOG"
// Output: 2

// Explanation: While the A, B, C, E, and G are in the same place for both strings, they have different characters in the other spaces. 
// Since there are 2 such spaces that are different (the D and F in the first string), we return 2.

// Input: "ABCDEFG", "ABCDEFG",
// Output: 0

const hamming = function (stringOne, stringTwo) {
  let counter = 0
  let index1 = 0
  let index2 = 0

  while (index1 < stringOne.length) {
    if (stringOne[index1] != stringTwo[index2]) {
      counter += 1
    }
    index1 += 1
    index2 += 1
  }
  return counter
}

console.log(hamming("ABCDEFG", "ABCXEOG"))
console.log(hamming("ABCDEFG", "ABCDEFG"))