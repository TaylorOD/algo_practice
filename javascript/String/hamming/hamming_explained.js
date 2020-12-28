// Given two strings of equal length, return the number of characters that are different between the two strings.

// Input: "ABCDEFG", "ABCXEOG"
// Output: 2

// Explanation: While the A, B, C, E, and G are in the same place for both strings, they have different characters in the other spaces. 
// Since there are 2 such spaces that are different (the D and F in the first string), we return 2.

// Input: "ABCDEFG", "ABCDEFG",
// Output: 0

// Create function that takes in two strings
const hamming = function (stringOne, stringTwo) {
  // Create counter which we will increment every time we find a difference in the string
  let counter = 0
  // Create index we will use to loop through stringOne
  let index1 = 0
  // Create index we will use to loop through stringTwo
  let index2 = 0

  // Create a while loop that will run the length of stringOne
  while (index1 < stringOne.length) {
    // If stringOne is not equal to stringTwo than increment the counter
    if (stringOne[index1] != stringTwo[index2]) {
      counter += 1
    }
    // Increment both indexes
    index1 += 1
    index2 += 1
  }
  // Return the counter
  return counter
}

// Call the function with both input strings
console.log(hamming("ABCDEFG", "ABCXEOG"))
console.log(hamming("ABCDEFG", "ABCDEFG"))