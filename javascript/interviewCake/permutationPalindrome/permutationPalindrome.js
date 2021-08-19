// Write an efficient function that checks whether any permutation ↴ of an input string is a palindrome. ↴

// You can assume the input string only contains lowercase letters.

// Examples:

// "civic" should return true
// "ivicc" should return true
// "civil" should return false
// "livci" should return false

const permutationPalindrome = function (inputString) {
  const unpairedCharacters = new Set()

  for (let char of inputString) {
    if (unpairedCharacters.has(char)) {
      unpairedCharacters.delete(char)
    } else {
      unpairedCharacters.add(char)
    }
  }

  return unpairedCharacters.size <= 1
}

console.log(permutationPalindrome("civic"))
console.log(permutationPalindrome("ivicc"))
console.log(permutationPalindrome("civil"))
console.log(permutationPalindrome("livci"))