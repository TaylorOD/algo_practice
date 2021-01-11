// Given two strings, return true if they are anagrams of each other, and false if they are not. 
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// Do not use any built-in sort methods.

// Input: “silent”, “listen”
// Output: true

// Input: “frog”, “bear”
// Output: false

const anagrams = function (stringOne, stringTwo) {
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

console.log(anagrams("silent", "listen"))
console.log(anagrams("frog", "bear"))