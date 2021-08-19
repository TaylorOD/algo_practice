string =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularized in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

function wordWrap(string, maxWidth) {
  let newLineString = "\n"
  let result = ""
  while (string.length > maxWidth) {
    let found = false
    for (let index = maxWidth - 1; index >= 0; index -= 1) {
      if (whiteSpaceCheck(string.charAt(index))) {
        result = result + [string.slice(0, index), newLineString].join("")
        string = string.slice(index + 1)
        found = true
        break
      }
    }
    if (!found) {
      result += [string.slice(0, maxWidth), newLineString].join("")
      string = string.slice(maxWidth)
    }
  }
  return result + string
}

function whiteSpaceCheck(x) {
  return x === " "
}

console.log(wordWrap(string, 40))