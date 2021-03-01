// Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.

const isValidSubsequence = function (array, subsequence) {
  let arrayIndex = 0
  let subsequenceIndex = 0

  while (arrayIndex < array.length && subsequenceIndex < subsequence.length) {
    if (array[arrayIndex] === subsequence[subsequenceIndex]) {
      subsequenceIndex += 1
    }
    arrayIndex += 1
  }
  return subsequenceIndex === subsequence.length
}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]))
console.log(isValidSubsequence([5, 1, 22, 25, 6, 50, -1, 8, 10], [1, 6, 19, -1, 10]))
