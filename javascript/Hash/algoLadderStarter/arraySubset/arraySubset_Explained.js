// Given two arrays, determine whether one is a subset of the other. It is considered a subset if all the values in one array are contained within the other.

// NOTE: You must accomplish this in O(n) time. This is also known as linear time.

// Input: [1, 2, 3, 4, 5, 6], [6, 3, 2]
// Output: true

// Input: [1, 2, 3, 4, 5, 6], [6, 3, 7]
// Output: false

// Create a function that takes in two input arrays
const arraySubset = function (inputArrayOne, inputArrayTwo) {
  // Determines which input array is longer and saves each input string accordingly
  if (inputArrayOne.length >= inputArrayTwo.length) {
    var longerArray = inputArrayOne
    var shorterArray = inputArrayTwo
  } else {
    var longerArray = inputArrayTwo
    var shorterArray = inputArrayOne
  }
  // Create an empty hash that we can store all the numbers from our longer input array in
  let allNumbersInArray = {}
  // Create our first for loop. This loop will add each element from the inputArrayOne to the hash.
  for (let i = 0; i < longerArray.length; i += 1) {
    if (!allNumbersInArray[longerArray[i]]) {
      allNumbersInArray[longerArray[i]] = true
    }
  }
  // Create our second for loop. This loop will check if each item present in our shorterArray is present in the hash.
  // If it is not we know this is not a subset of the longerArray so return false.
  for (let j = 0; j < shorterArray.length; j += 1) {
    if (!allNumbersInArray[shorterArray[j]]) {
      return false
    }
  }
  // If it passes that for loop with no issues then it is a subset and return true.
  return true
}
// Call our solution with two test inputs, the first one is true while the second is false
console.log(arraySubset([1, 2, 3, 4, 5, 6], [6, 3, 2]))
console.log(arraySubset([1, 2, 3, 4, 5, 6], [6, 3, 7]))

// Although this solution uses two for loops it is still an O(N) solution because they are not nested.