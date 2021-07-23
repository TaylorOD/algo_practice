// You are given two strings pattern and s. The first string pattern
// contains only the symbols 0 and 1, and the second string s contains only
// lowercase English letters.

// Let's say that pattern matches a substring s[l..r] of s if the following
// 3 conditions are met:

// - they have equal length;
// - for each 0 in pattern the corresponding letter
// in the substring is a vowel;
// - for each 1 in pattern the corresponding
// letter is a consonant.  Your task is to calculate the number of
// substrings of s that match pattern.

// Note: In this task we define the vowels as 'a', 'e', 'i', 'o', 'u', and
// 'y'. All other letters are consonants.

// ---

// pattern = 0's or 1's will change
// s = some set of character, a, e, i, o, u, y
// Patten empty = return = - can be empty

// return number of substrings that match

// O's are vowels
// 1's are consonants

// Example:

// For pattern = "010" and s = "amazing", the output should be binaryPatternMatching(pattern, s) = 2.

// Example:
// input: patten = "0", s = "aaaa"
// output: 4

// Example:
// input: pattern = "0000001", s = "abv"
// Output: 0

// Create the function that takes in pattern and s
// if check (pattern.length === 0) {
// return 0
// }
// if check (pattern,length > string.length) {
// return 0
// }
// let result = 0
// for loop index, index < string.length index += 1{
// if (characterConverter(string.substring(index, pattern.length)) === pattern) {
// result += 1
// })
// }
//
// return result
//

// Const charConvert (substring) {
// const vowel = [a: true,e,i,o,u,y]
// let result = ""
// for loop index
// if (vowel[substring[index]] ) {
// result,push(0)
// } else {
// result.push(1)
// }
// return result
// }

// Create a function that takes in a pattern and a string
function binaryPatternMatching(pattern, string) {
  // Create a result variable
  let count = 0
  // For loop that will move through the string
  for (let index = 0; index <= string.length; index += 1) {
    // Call our helper function to convert string to binary.
    // Check if the result is equal to the patten.
    // If so increment our count by 1
    if (charConvert(string.substring(index, pattern.length + index)) === pattern) {
      count += 1
    }
  }
  // Return the count
  return count
}
// Create our charConvert helper function that takes in a substring
const charConvert = function (substring) {
  // Create a vowel object
  const vowel = { a: true, e: true, i: true, o: true, u: true, y: true }
  // Create our result string which we will add our numbers to
  let result = ""
  // Create a for loop that moves through the string
  for (let index = 0; index < substring.length; index += 1) {
    // If the substring current index character exists in the vowel object then add a 0 to the result string
    if (vowel[substring[index]]) {
      result += "0"
      // Else add a 1
    } else {
      result += "1"
    }
  }
  // Return the result string
  return result
}
// Call our function with a test input
console.log(binaryPatternMatching("0", "aaaa"))