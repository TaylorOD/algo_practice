
function isPalindrome(string) {
  let reversedString = []
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString.push(string[i])
  }
  return string === reversedString.join("")
}

console.log(isPalindrome("racecar"))