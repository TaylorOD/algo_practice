// Given ONE array of strings, return a new array that contains every combination of each string with every other string in the array.

// Input: ["a", "b", "c", "d"]
// Output: ["ab", "ac", "ad", "ba", "bc", "bd", "ca", "cb", "cd", "da", "db", "dc"]

// Create function that takes in an array
const arrayMeshTwo = function (array) {
  // Create result empty array
  let result = []
  // Create a for loop to run the length of the array
  for (let i = 0; i < array.length; i += 1) {
    // Create a second for loop to run the next element for the length of the array
    for (let j = 0; j < array.length; j += 1) {
      // Create an if statement that will ensure we do not end up with the first element paired with itself ("aa", "bb")
      if (array[i] != array[j]) {
        // Push the array combinations to the result array
        result.push(array[i] + array[j])
      }
    }
  }
  // Return the result array
  return result
}
// Call the function with the givin test input array
console.log(arrayMeshTwo(["a", "b", "c", "d"]))