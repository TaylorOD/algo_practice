// Write a function that returns the intersection of two arrays.
// The intersection is a third array that contains all values contained within the first two arrays.

// Input:
// [1, 2, 3, 4, 5], [0, 2, 4, 6, 8]

// Output:
// [2, 4]

// Your function should have a time complexity of O(N).
// Do not use any build in programing language methods to do this.
// Use a hash table in your solution.

// Create a function that takes in our two input arrays
const intersectionOfTwoArrays = function (inputArrayOne, inputArrayTwo) {
  // Create a results empty array to store our answers
  let result = []
  // Create all characters hash to store every character
  let allCharacters = {}

  // Create a for loop that will run the length of the input array
  for (let i = 0; i < inputArrayOne.length; i += 1) {
    // If allCharacters does not include the value being looped over, add it
    if (!allCharacters[inputArrayOne[i]]) {
      allCharacters[inputArrayOne[i]] = true
      // If it already includes the value being looped over than it is a duplicate and we can add it to the results array
    } else {
      result.push(inputArrayOne[i])
    }
    // If allCharacters does not include the value being looped over, add it
    if (!allCharacters[inputArrayTwo[i]]) {
      allCharacters[inputArrayTwo[i]] = true
      // If it already includes the value being looped over than it is a duplicate and we can add it to the results array
    } else {
      result.push(inputArrayTwo[i])
    }
  }
  // Return the results array
  return result
}
// Call the function with the two givin test inputs
console.log(intersectionOfTwoArrays([1, 2, 3, 4, 5], [0, 2, 4, 6, 8]))

// Time complexity is O(N)