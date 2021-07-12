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

// create function
function isPalindrome(string) {
  // create array to store each letter of the string
  let reversedString = []
  // create for loop. index is equal to string length -1, runs until 1 is 0, and decreases 1 each time.
  for (let i = string.length - 1; i >= 0; i--) {
    // add each element of the string, strarting at the end, to the array
    reversedString.push(string[i])
  }
  // join's the reversed string together and checks if it is equal to string. Will return true if is or false if not
  return string === reversedString.join("")
}
// run function
console.log(isPalindrome("racecar"))