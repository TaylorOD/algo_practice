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

const runLengthEncoding = function (string) {
  let result = []
  let currentRunLength = 1

  for (let i = 1; i < string.length; i += 1) {
    let currentCharacter = string[i]
    let previousCharacter = string[i - 1]

    if (currentCharacter !== previousCharacter || currentRunLength === 9) {
      result.push(currentRunLength.toString())
      result.push(previousCharacter)
      currentRunLength = 0
    }
    currentRunLength += 1
  }

  result.push(currentRunLength.toString())
  result.push(string[string.length - 1])

  return result.join("")
}

console.log(runLengthEncoding("AAAAAAAAAAAAABBCCCCDD"))
console.log(runLengthEncoding("************^^^^^^^$$$$$$%%%%%%%!!!!!!AAAAAAAAAAAAAAAAAAAA"))
console.log(runLengthEncoding("1A2BB3CCC4DDDD"))
