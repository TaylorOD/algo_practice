// Given a string, return true if the “$” character is contained within the string or false if it is not.

// Input: “i hate $ but i love money i know i know im crazy”
// Output: true

// Input: “abcdefghijklmnopqrstuvwxyz”
// Output: false

// Using .includes method 
// Create function that takes in a string
const showMeTheMoney = function (string) {
  // If the string includes the $ symbol then return true.
  if (string.includes("$")) {
    return true
    // Else return false
  } else {
    return false
  }
}
// Call the function with the input string which will return false
console.log(showMeTheMoney("i hate $ but i love money i know i know im crazy"))
console.log(showMeTheMoney("abcdefghijklmnopqrstuvwxyz"))

// Using a while loop
// Create function that takes in a string
const showMeTheMoneyLoop = function (string) {
  // Create an index that we can use to increment our way through our string
  let index = 0
  // Create a while loop that will loop through each element in the string
  while (index < string.length) {
    // If the current element in the string is equal to the $ symbol then return true
    if (string[index] === "$") {
      return true
    }
    // Increment the index each loop
    index += 1
  }
  // Return false if none of the string elements are equal to $
  return false
}
// Call the function with the input string which will return false
console.log(showMeTheMoneyLoop("i hate $ but i love money i know i know im crazy"))
console.log(showMeTheMoneyLoop("abcdefghijklmnopqrstuvwxyz"))