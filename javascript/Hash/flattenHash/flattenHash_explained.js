// Given a hash, return a flat array containing all the hash’s keys and values.

// Input: {“a” => 1, “b” => 2, “c” => 3, “d” => 4}
// Output: [“a”, 1, “b”, 2, “c”, 3, “d”, 4]

// Create function that takes in a hash
const flattenHash = function (hash) {
  // Create an empty results array
  let result = []
  // Create a for in loop that we will use to loop through the hash
  for (let value in hash) {
    // Add the first element of each hash pair to the result array 
    result.push(value)
    // Add the second element of each hash pair to the result array
    result.push(hash[value])
  }
  // Return the results array
  return result
}
// Call the function with the given test input
console.log(flattenHash({a: 1, b: 2, c: 3, d: 4}))