// Given two arrays of strings, return a new string that contains every combination of a string f
// rom the first array concatenated with a string from the second array.

// Input: ["a", "b", "c"], ["d", "e", "f", "g"]
// Output: ["ad", "ae", "af", "ag", "bd", "be", "bf", "bg", "cd", "ce", "cf", "cg"]

const arrayMesh = function (arrayOne, arrayTwo) {
  let result = []

  for (let i = 0; i < arrayOne.length; i += 1) {
    for (let j = 0; j < arrayTwo.length; j += 1) {
      result.push(arrayOne[i] + arrayTwo[j])
    }
  }
  return result
}

console.log(arrayMesh(["a", "b", "c"], ["d", "e", "f", "g"]))