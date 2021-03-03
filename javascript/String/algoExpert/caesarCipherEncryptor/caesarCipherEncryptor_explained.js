// Given a non-empty string of lowercase letters and a non-negative integer
// representing a key, write a function that returns a new string obtained by
// shifting every letter in the input string by k positions in the alphabet,
// where k is the key.

// Example:
// Input:
// ("xyz", 2)

// Output:
// "zab"

// Create function that takes in a string and key
function caesarCipherEncryptor(string, key) {
  // Create an empty array to store letters
  let newLetters = []
  // Create a new key variable which takes the key and divides it by 26
  let newKey = key % 26
  // Create an alphabet array
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("")

  // Create a for of loop that will loop through each letter in the string
  for (let letter of string) {
    // Call our helper function and push the results to our new letters array
    newLetters.push(getNewLetters(letter, newKey, alphabet))
  }
  // Return the newLetters array joined
  return newLetters.join("")
}

// Create our helper function that takes in a letter, key, and alphabet
function getNewLetters(letter, key, alphabet) {
  // Create newLetterCode which is takes the alphabet indexOf the letter we passed in plus the key
  let newLetterCode = alphabet.indexOf(letter) + key
  // Return the alphabet with the newlettercode divided by 26
  return alphabet[newLetterCode % 26]
}

// Call the function with our test input
console.log(caesarCipherEncryptor("xyz", 2))
