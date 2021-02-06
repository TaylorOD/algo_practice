// Write a recusive function that return an array of all anagrams of a given string.

// Input:
// "abc"
// Output:
// ["abc", "acb", "bac", "bca", "cab", "cba"]

const anagramGeneration = function (inputString) {
  let result = []

  if (inputString.length === 1) {
    return inputString[0]
  }

  let substringAnagrams = anagramGeneration(inputString.slice(1))

  for (let i = 0; i < substringAnagrams.length; i += 1) {
    for (let j = 0; j < substringAnagrams.length; j += 1) {
      let copy = substringAnagrams
      result.push(copy)
    }
  }
  return result
}

console.log(anagramGeneration("abc"))