// Write a recursive function that prints true if the input word is a palindrome and false if it is not.

const recursionPalindrome = function (inputString) {
  if (inputString.length === 0 || inputString.length === 1) {
    return true
  }
  if (inputString[0] === inputString[inputString.length - 1]) {
    return recursionPalindrome(inputString.substring(1, inputString.length - 1))
  }
  return false
}

console.log(recursionPalindrome("racecar"))
console.log(recursionPalindrome("coding"))


function isPalindrome(string) {
  let reversedString = []
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString.push(string[i])
  }
  return string === reversedString.join("")
}

console.log(isPalindrome("racecar"))