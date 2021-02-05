// Write a recursive function that returns the number of "x's" in a givin string.

// Input:
// "axbxcxd"

// Output:
// 3

const countingX = function (inputString) {
  if (inputString.length === 0) {
    return 0
  }
  if (inputString[0] === "x") {
    return 1 + countingX(inputString.slice(1))
  } else {
    return countingX(inputString.slice(1))
  }
}

console.log(countingX("axbxcxd"))
console.log(countingX("axbxcxdxxx"))