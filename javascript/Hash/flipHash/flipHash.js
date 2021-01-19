// Given a hash, create a new hash that has the keys and values switched.

// Input: {"a" => 1, "b" => 2, "c" => 3}
// Output: {1 => "a", 2 => "b", 3 => "c"}

const flipHash = function (inputHash) {
  let result = {}

  for (let key in inputHash) {
    result[inputHash[key]] = key
  }
  
  return result
}

console.log(flipHash({"a": 1, "b": 2, "c": 3}))