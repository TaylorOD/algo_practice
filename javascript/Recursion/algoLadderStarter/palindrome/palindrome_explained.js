// Write a recursive function that prints true if the input word is a palindrome and false if it is not.

// Create out function that takes in a String
const recursionPalindrome = function (inputString) {
  // If the inputString length is equal to 0 or 1 then return true - base case
  if (inputString.length === 0 || inputString.length === 1) {
    return true
  }
  // If the input string first element and the last element are the same move on
  if (inputString[0] === inputString[inputString.length - 1]) {
    // Return/call our recursive function and remove the first and the last element from the input string
    return recursionPalindrome(inputString.substring(1, inputString.length - 1))
  }
  // If our inputString is a palindrome it will result in true being returned in our base case. If our base case if not called then the input string is not a palindrome so we will return false.
  return false
}
// Call our function with two test inputs
console.log(recursionPalindrome("racecar"))
console.log(recursionPalindrome("coding"))
