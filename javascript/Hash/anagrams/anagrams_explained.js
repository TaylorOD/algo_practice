// Given two strings, return true if they are anagrams of each other, and false if they are not. 
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// Do not use any built-in sort methods.

// Input: “silent”, “listen”
// Output: true

// Input: “frog”, “bear”
// Output: false

// Create function that takes in two strings
const anagrams = function (stringOne, stringTwo) {
  // Create results variable that we will set to true by default
  let result = true
  // Create an empty object we will use to store the values of StringOne
  let stringOneHash = {}

  // Create a for loop that will loop over stringOne and add each item to our hash/object
  for (let i = 0; i < stringOne.length; i += 1) {
    if (!stringOneHash[stringOne[i]]) {
      stringOneHash[stringOne[i]] = 1
    }
  }

  // Create a for loop that will run the length of stringOne
  for (let j = 0; j < stringOne.length; j += 1) {
    // If our full Hash does not include a character from stringTwo then set the result to false
    if (!stringOneHash[stringTwo[j]]) {
      result = false
    }
  }
  // Return the result
  return result
}
// Call our function with one working and non working test input
console.log(anagrams("silent", "listen"))
console.log(anagrams("frog", "bear"))