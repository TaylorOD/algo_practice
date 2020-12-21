// Given a string, return true if the “$” character is contained within the string or false if it is not.

// Input: “i hate $ but i love money i know i know im crazy”
// Output: true

// Input: “abcdefghijklmnopqrstuvwxyz”
// Output: false

// Using .includes method 
const showMeTheMoney = function (string) {
  if (string.includes("$")) {
    return true
  } else {
    return false
  }
}

console.log(showMeTheMoney("i hate $ but i love money i know i know im crazy"))
console.log(showMeTheMoney("abcdefghijklmnopqrstuvwxyz"))

// Using a while loop
const showMeTheMoneyLoop = function (string) {
  let index = 0
  while (index < string.length) {
    if (string[index] === "$") {
      return true
    }
    index += 1
  }
  return false
}

console.log(showMeTheMoneyLoop("i hate $ but i love money i know i know im crazy"))
console.log(showMeTheMoneyLoop("abcdefghijklmnopqrstuvwxyz"))