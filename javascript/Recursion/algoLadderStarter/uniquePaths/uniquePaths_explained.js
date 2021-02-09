// Lets say you have a grid of rows and columns.
// Write a recursive function that accepts a number of rows and a number of columns and calculates the number of possible "shortest" paths from the upper leftmost square to the lower right most square.
// Example:
// Input:
// 3, 7
// Output:
// 28

// Create function that takes in rows and columns
const uniquePaths = function (rows, columns) {
  // If the rows or columns are equal to 1 then return 1 - base case
  if (rows === 1 || columns === 1) {
    return 1
  }
  // Otherwise call our function recursively. Add a call to track both rows and columns
  return uniquePaths(rows - 1, columns) + uniquePaths(rows, columns - 1)
}
// Call our function with the test case
console.log(uniquePaths(3, 7))
