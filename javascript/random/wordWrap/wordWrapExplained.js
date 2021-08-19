string =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

function wordWrap(string, maxWidth) {
  // "\n" makes a new line
  let newLineString = "\n"
  // Create an empty result string where we will store out corrected string
  let result = ""
  // Create a while loop that will run as long as the string.length if greater than the maxWidth
  while (string.length > maxWidth) {
    let found = false

    // Inserts new line at first whitespace of the line
    for (let index = maxWidth - 1; index >= 0; index -= 1) {
      // This check will make sure there is no white space at the current index
      if (whiteSpaceCheck(string.charAt(index))) {
        // make our result = to the result plus the new line
        result = result + [string.slice(0, index), newLineString].join("")
        // cut the string at the index
        string = string.slice(index + 1)
        // Found is now true
        found = true
        // Break out of the string
        break
      }
    }
    // Inserts new line at maxWidth position, the word is too long to wrap
    if (!found) {
      // if the word is too long to wrap than add a new line at maxWidth
      result += [string.slice(0, maxWidth), newLineString].join("")
      // Slice the string at maxWidth
      string = string.slice(maxWidth)
    }
  }
  // Return the result + string
  return result + string
}
// Create helper function that tests the white space
function whiteSpaceCheck(x) {
  // x is white space this will return false
  return x === " "
}

console.log(wordWrap(string, 40))
// console.log(wordWrap(string, 80))
