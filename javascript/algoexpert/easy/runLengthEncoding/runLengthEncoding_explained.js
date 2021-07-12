// Write a function that takes in a non-empty string and returns its run-length encoding.
// From Wikipedia, "run-length encoding is a form of lossless data compression in
// which runs of data are stored as a single data value and count, rather than as
// the original run." For this problem, a run of data is any sequence of
// consecutive, identical characters. So the run "AAA" would be run-length-encoded as "3A"

// Example:
// Input:
// "AAAAAAAAAAAAABBCCCCDD"

// Output:
// "9A4A2B4C2D"

// Create a function that takes in a string
const runLengthEncoding = function (string) {
  // Create a results empty array
  let result = []
  // Create a counter that we will start at 1
  let currentRunLength = 1

  // Create a for loop that runs the length of the array. Start at one since we are going to use a i - 1 below
  for (let i = 1; i < string.length; i += 1) {
    // Create current character var which is string[i]
    let currentCharacter = string[i]
    // Create previous character var which is i - 1 - We will use these to determine if the run is still going or not
    let previousCharacter = string[i - 1]

    // Create a if condition that runs if the current and previous characters are no longer the same or if the run length is 9 (the max)
    if (currentCharacter !== previousCharacter || currentRunLength === 9) {
      // If so then push the run length, converted to a string, to our results array and the previous character var which is our letter
      result.push(currentRunLength.toString())
      result.push(previousCharacter)
      // Reset the current run length to 0
      currentRunLength = 0
    }
    // Increment the run length each time
    currentRunLength += 1
  }
  // To handle the last run in the array. Doing the same as above
  result.push(currentRunLength.toString())
  result.push(string[string.length - 1])

  // Return the results but joined together
  return result.join("")
}
// Call the function with out test inputs
console.log(runLengthEncoding("AAAAAAAAAAAAABBCCCCDD"))
console.log(runLengthEncoding("************^^^^^^^$$$$$$%%%%%%%!!!!!!AAAAAAAAAAAAAAAAAAAA"))
console.log(runLengthEncoding("1A2BB3CCC4DDDD"))
