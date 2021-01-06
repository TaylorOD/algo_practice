// Given a string, find the most commonly occurring letter.

// Input: “peter piper picked a peck of pickled peppers”
// Output: “p”

// Create function that takes in a string
const mostFrequentLetter = function (string) {
  // Parse the string and save it as a new variable
  let parsedString = string.split("")
  // Create an empty hash to store the letter counts in
  let letterCounts = {}
  // Create an empty string that we will use to store the most frequently found variable
  let mostFrequentLetterVariable = ""
  // Create a variable that we will use to increment each time we encounter the most frequent count 
  let mostFrequentCount = 0

  // Create forloop that will run the length of the parsed string array
  for (let i = 0; i < parsedString.length; i += 1) {
    // If the lettercounts object does not include the selected element in the parsed string then create it with a value of 1
    if (!letterCounts[parsedString[i]]) {
      letterCounts[parsedString[i]] = 1
      // Else (if it already exists in the letterCounters object) increment the value of the selected letter
    } else {
      letterCounts[parsedString[i]] += 1
    }

    // If the letterCounts element is greater than the most frequent count variable it is the new most frequent count variable
    if (letterCounts[string[i]] > mostFrequentCount) {
      mostFrequentCount = letterCounts[string[i]]
      // Also set the most frequentLetter Variable as the current item
      mostFrequentLetterVariable = string[i]
    }
  }
  // Return the most frequently found letter variable
  return mostFrequentLetterVariable
}
// Call the function with the givin input
console.log(mostFrequentLetter("peter piper picked a peck of pickled peppers"))