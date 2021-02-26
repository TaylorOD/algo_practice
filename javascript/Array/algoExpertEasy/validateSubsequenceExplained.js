// Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.

// Create a function that takes in our array and subsequence
const isValidSubsequence = function (array, subsequence) {
  // Create pointers for our array and subsequence
  let arrayIndex = 0
  let subsequenceIndex = 0

  // While loop which runs as long as the arrayIndex and subIndex are less than their input lengths
  while (arrayIndex < array.length && subsequenceIndex < subsequence.length) {
    // If the array[arrayIndex] and the sub[subIndex] are equal then move on to the next sub number by incrementing it.
    // The array index will increment whenever the subIndex and it are not equal. This will move us through both arrays
    if (array[arrayIndex] === subsequence[subsequenceIndex]) {
      subsequenceIndex += 1
    }
    arrayIndex += 1
  }
  // If the subsequenceIndex has not been incremented enough times to equal the subsequence.length then this will return false
  // Otherwise it will return true
  return subsequenceIndex === subsequence.length
}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]))
console.log(isValidSubsequence([5, 1, 22, 25, 6, 50, -1, 8, 10], [1, 6, 19, -1, 10]))