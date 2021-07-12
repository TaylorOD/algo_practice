// Write a recursive function that accepts a string and returns the first index that contains the character "x".
// You can assume there will be at least one "x"
// Example:
// Input:
// "abcdefghijklmnopqrstuvwxyz"
// Output:
// 22

const xIndex = function (inputString) {
  if (inputString[0] === "x") {
    return 0
  }
  return xIndex(inputString.slice(1)) + 1
}

console.log(xIndex("abcdefghijklmnopqrstuvwxyz"))
console.log(xIndex("zzx"))