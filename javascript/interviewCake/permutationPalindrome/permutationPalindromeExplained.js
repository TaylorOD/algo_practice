// Write an efficient function that checks whether any permutation ↴ of an input string is a palindrome. ↴

// You can assume the input string only contains lowercase letters.

// Examples:

// "civic" should return true
// "ivicc" should return true
// "civil" should return false
// "livci" should return false

// Create a function that takes in an inputString
const permutationPalindrome = function (inputString) {
  // Track characters we've seen an odd number of times
  // By creating a set
  const unpairedCharacters = new Set();
  // Create a for of loop to move through the inputString
  for (let char of inputString) {
    // If the unpairedCharacters has the character then delete it
    if (unpairedCharacters.has(char)) {
      unpairedCharacters.delete(char)
      // Else add it
    } else {
      unpairedCharacters.add(char)
    }
  }
  // The string has a palindrome permutation if it
  // has one or zero characters without a pair
  return unpairedCharacters.size <= 1;
}
// Call the function with four test inputs
console.log(permutationPalindrome("civic"))
console.log(permutationPalindrome("ivicc"))
console.log(permutationPalindrome("civil"))
console.log(permutationPalindrome("livci"))
