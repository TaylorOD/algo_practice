// Given two arrays, determine whether one is a subset of the other. It is considered a subset if all the values in one array are contained within the other.

// NOTE: You must accomplish this in O(n) time. This is also known as linear time.

// Input: [1, 2, 3, 4, 5, 6], [6, 3, 2]
// Output: true

// Input: [1, 2, 3, 4, 5, 6], [6, 3, 7]
// Output: false

const arraySubset = function (inputArrayOne, inputArrayTwo) {
  if (inputArrayOne.length >= inputArrayTwo.length) {
    var longerArray = inputArrayOne
    var shorterArray = inputArrayTwo
  } else {
    var longerArray = inputArrayTwo
    var shorterArray = inputArrayOne
  }

  let allNumbersInArray = {}

  for (let i = 0; i < longerArray.length; i += 1) {
    if (!allNumbersInArray[longerArray[i]]) {
      allNumbersInArray[longerArray[i]] = true
    }
  }
  for (let j = 0; j < shorterArray.length; j += 1) {
    if (!allNumbersInArray[shorterArray[j]]) {
      return false
    }
  }
  return true
}

console.log(arraySubset([1, 2, 3, 4, 5, 6], [6, 3, 2]))
console.log(arraySubset([1, 2, 3, 4, 5, 6], [6, 3, 7]))