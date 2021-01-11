// Given two strings, return true if they are anagrams of each other, and false if they are not. 
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// Do not use any built-in sort methods.

// Input: “silent”, “listen”
// Output: true

// Input: “frog”, “bear”
// Output: false

// Uses a .includes which most interviewers would not like
const anagramsUsingIncludes = function (stringOne, stringTwo) {
  let result = true
  
  let stringOneSplit = stringOne.split("")
  let stringTwoSplit = stringTwo.split("")

  for (let i = 0; i < stringOneSplit.length; i += 1) {
    if (!stringOneSplit.includes(stringTwoSplit[i])) {
      result = false
    }
  }
  return result
}

console.log(anagramsUsingIncludes("silent", "listen"))
console.log(anagramsUsingIncludes("frog", "bear"))

// Solves it using hashes and loops
const anagrams = function (stringOne, stringTwo) {
  let result = true
  
  let stringOneSplit = stringOne.split("")
  let stringTwoSplit = stringTwo.split("")
  let stringOneHash = {}

  for (let i = 0; i < stringOne.length; i += 1) {
    if (!stringOneHash[stringOneSplit[i]]) {
      stringOneHash[stringOneSplit[i]] = 1
    }
  }

  for (let j = 0; j < stringOneSplit.length; j += 1) {
    if (!stringOneHash[stringTwoSplit[j]]) {
      result = false
    }
  }
  return result
}

console.log(anagrams("silent", "listen"))
console.log(anagrams("frog", "bear"))