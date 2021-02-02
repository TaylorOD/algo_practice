// Given an array of strings, return a hash that provides of a count of how many times each string occurs.

// Input: ["Dewey", "Truman", "Dewey", "Dewey", "Truman", "Truman", "Dewey", "Truman", "Truman", "Dewey", "Dewey"]

// Output: {"Dewey" => 6, "Truman" => 5}

// Explanation: "Dewey" occurs 6 times in the array, while "Truman" occurs 5 times.

// Create function that takes in an array
const countVotes = function (array) {
  // Create results object
  let result = {}

  // Create for loop that will loop through our array
  for (let i = 0; i < array.length; i += 1) {
    // Create if statement that checks if the current item in the array is includes in the results object
    if (!result[array[i]]) {
      // If it is not then create it in the results object with a value of 1 - We will increment that value each time we see this item
      result[array[i]] = 1
      // If we do see the item in our results object than increment the value by 1
    } else {
      result[array[i]] = (result[array[i]]) += 1
    }
  }
  // Return the results object
  return result
}
// Call the function with the test input
console.log(countVotes(["Dewey", "Truman", "Dewey", "Dewey", "Truman", "Truman", "Dewey", "Truman", "Truman", "Dewey", "Dewey"]))
