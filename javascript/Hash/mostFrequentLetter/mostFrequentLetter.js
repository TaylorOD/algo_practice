// Given a string, find the most commonly occurring letter.

// Input: “peter piper picked a peck of pickled peppers”
// Output: “p”

const mostFrequentLetter = function (string) {
  let parsedString = string.split("")
  let letterCounts = {}
  let mostFrequentLetterVariable = ""
  let mostFrequentCount = 0

  for (let i = 0; i < parsedString.length; i += 1) {
    if (!letterCounts[parsedString[i]]) {
      letterCounts[parsedString[i]] = 1
    } else {
      letterCounts[parsedString[i]] += 1
    }
    if (letterCounts[string[i]] > mostFrequentCount) {
      mostFrequentCount = letterCounts[string[i]]
      mostFrequentLetterVariable = string[i]
    }
  }
  
  return mostFrequentLetterVariable
}

console.log(mostFrequentLetter("peter piper picked a peck of pickled peppers"))