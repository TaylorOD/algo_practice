// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

// Example 2:

// Input: numRows = 1
// Output: [[1]]

// Create a function that takes in a number
const pascalsTriangle = function (inputNumber) {
  // Create a results array
  let results = []
  // Create a for loop
  for (let i = 0; i < inputNumber; i += 1) {
    // Create a current row array
    let currentRow = []
    // Create another for loop
    for (let j = 0; j <= i; j += 1) {
      // j is equal to 0 and j is equal to i then push 1 to current row
      if (j === 0 || j === i) {
        currentRow.push(1)
        // Else push results array with certain elements increased and decreased
      } else {
        currentRow.push(results[i - 1][j - 1] + results[i - 1][j])
      }
    }
    // Push the current row array to the results array
    results.push(currentRow)
  }
  // Return the results array
  return results
}
// Call our function with test inputs
console.log(5)
console.log(1)