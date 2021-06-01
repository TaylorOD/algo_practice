// Given ONE array of strings, return a new array that contains every combination of each string with every other string in the array.

// Input: ["a", "b", "c", "d"]
// Output: ["ab", "ac", "ad", "ba", "bc", "bd", "ca", "cb", "cd", "da", "db", "dc"]

const arrayMeshTwo = function (array) {
  let result = []

  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length; j += 1) {
      if (array[i] != array[j]) {
        result.push(array[i] + array[j])
      }
    }
  }

  return result
}

console.log(arrayMeshTwo(["a", "b", "c", "d"]))