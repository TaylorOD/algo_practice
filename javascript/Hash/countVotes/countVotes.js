// Given an array of strings, return a hash that provides of a count of how many times each string occurs.

// Input: ["Dewey", "Truman", "Dewey", "Dewey", "Truman", "Truman", "Dewey", "Truman", "Truman", "Dewey", "Dewey"]

// Output: {"Dewey" => 6, "Truman" => 5}

// Explanation: "Dewey" occurs 6 times in the array, while "Truman" occurs 5 times.

const countVotes = function (array) {
  let result = {}

  for (let i = 0; i < array.length; i += 1) {
    if (!result[array[i]]) {
      result[array[i]] = 1
    } else {
      result[array[i]] = (result[array[i]]) += 1
    }
  }
  return result
}

console.log(countVotes(["Dewey", "Truman", "Dewey", "Dewey", "Truman", "Truman", "Dewey", "Truman", "Truman", "Dewey", "Dewey"]))
