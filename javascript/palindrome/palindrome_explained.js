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