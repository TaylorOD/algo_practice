// Given a hash, return a flat array containing all the hash’s keys and values.

// Input: {“a” => 1, “b” => 2, “c” => 3, “d” => 4}
// Output: [“a”, 1, “b”, 2, “c”, 3, “d”, 4]

const flattenHash = function (hash) {
  let result = []
  for (let number in hash) {
    result.push(number)
    result.push(hash[number])
  }
  return result
}

console.log(flattenHash({a: 1, b: 2, c: 3, d: 4}))