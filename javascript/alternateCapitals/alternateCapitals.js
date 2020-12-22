// Given a string, return a copy of the original string that has every other character capitalized. (Capitalization should begin with the second character.)

// Input: “hello, how are your porcupines today?”
// Output: “hElLo, HoW ArE YoUr pOrCuPiNeS ToDaY?”

const alternateCapitals = function (string) {
  let index = 0
  let result = ""
  while (index < string.length) {

    if (index % 2 === 0) {
      result = result + string[index].toUpperCase()
    } else {
      result = result + string[index]
    }
    index += 1
  }
  return result
}

console.log(alternateCapitals("hello, how are your porcupines today?"))