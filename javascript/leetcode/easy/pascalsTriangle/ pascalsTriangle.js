// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

// Example 2:

// Input: numRows = 1
// Output: [[1]]

const pascalsTriangle = function (inputNumber) {
  let results = []
  for (let i = 0; i < inputNumber; i += 1) {
    let currentRow = []
    for (let j = 0; j <= i; j += 1) {
      if (j === 0 || j === i) {
        currentRow.push(1)
      } else {
        currentRow.push(results[i - 1][j - 1] + results[i - 1][j])
      }
    }
    results.push(currentRow)
  }
  return results
}

console.log(5)
console.log(1)