// You are given a hash in format #A, and you are to return the same data as a hash using format #B, as specified below:

// Input:
// {
// 1: ["A", "E", "I", "O", "U"]
// }

// Output:
// {
// 'a': 1,
// 'e': 1,
// 'i': 1,
// 'o': 1,
// 'u': 1
// }

const hashAToHashB = function (inputHash) {
  let result = {}

  for (let i = 0; i < inputHash[1].length; i += 1) {
    result[inputHash[1][i].toLowerCase()] = 1
  }

  return result
}

console.log(hashAToHashB({ 1: ["A", "E", "I", "O", "U"] }))

// Input:
// {
// 1: ["A", "E"],
// 2: ["D", "G"]
// }

// Output:
// {
// 'a': 1,
// 'd': 2,
// 'e': 1,
// 'g': 2
// }

const hashAToHashBTwo = function (inputHash) {
  let result = {}

  for (let i = 0; i < inputHash[1].length; i += 1) {
    result[inputHash[1][i].toLowerCase()] = 1
    result[inputHash[2][i].toLowerCase()] = 2
  }

  return result
}

console.log(hashAToHashBTwo({ 1: ["A", "E"], 2: ["D", "G"] }))

// Input:
// 1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
// 2: ["D", "G"],
// 3: ["B", "C", "M", "P"],
// 4: ["F", "H", "V", "W", "Y"],
// 5: ["K"],
// 8: ["J", "X"],
// 10: ["Q", "Z"]
// }

// Output:
// {
// 'a': 1,
// 'b': 3,
// 'c': 3,
// 'd': 2,
// 'e': 1,
// 'f': 4,
// 'g': 2,
// 'h': 4,
// 'i': 1,
// 'j': 8,
// 'k': 5,
// 'l': 1,
// 'm': 3,
// 'n': 1,
// 'o': 1,
// 'p': 3,
// 'q': 10,
// 'r': 1,
// 's': 1,
// 't': 1,
// 'u': 1,
// 'v': 4,
// 'w': 4,
// 'x': 8,
// 'y': 4,
// 'z': 10
// }