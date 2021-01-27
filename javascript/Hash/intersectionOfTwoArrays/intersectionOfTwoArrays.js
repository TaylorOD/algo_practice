// Write a function that returns the intersection of two arrays.
// The intersection is a third array that contains all values contained within the first two arrays.

// Input:
// [1, 2, 3, 4, 5], [0, 2, 4, 6, 8]

// Output:
// [2, 4]

// Your function should have a time complexity of O(N).
// Do not use any build in programing language methods to do this.
// Use a hash table in your solution.


const intersectionOfTwoArrays = function (inputArrayOne, inputArrayTwo) {
  let result = []
  let allCharacters = {}

  for (let i = 0; i < inputArrayOne.length; i += 1) {
    if (!allCharacters[inputArrayOne[i]]) {
      allCharacters[inputArrayOne[i]] = true
    } else {
      result.push(inputArrayOne[i])
    }

    if (!allCharacters[inputArrayTwo[i]]) {
      allCharacters[inputArrayTwo[i]] = true
    } else {
      result.push(inputArrayTwo[i])
    }
  }

  return result
}

console.log(intersectionOfTwoArrays([1, 2, 3, 4, 5], [0, 2, 4, 6, 8]))