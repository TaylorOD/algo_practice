// Given a hash, create a new hash that has the keys and values switched.

// Input: {"a" => 1, "b" => 2, "c" => 3}
// Output: {1 => "a", 2 => "b", 3 => "c"}

// create function that takes in our inputHash
const flipHash = function (inputHash) {
  // Create an empty results hash to store our new hash
  let result = {}
  // Create a for loop that we will use to loop over the hash
  for (let key in inputHash) {
    // Store the hash in the results hash as requested by the question
    result[inputHash[key]] = key
  }
  // Return the results array
  return result
}
// Call the function with the givin input
console.log(flipHash({"a": 1, "b": 2, "c": 3}))