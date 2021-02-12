// Lets say you have a grid of rows and columns.
// Write a recursive function that accepts a number of rows and a number of columns and calculates the number of possible "shortest" paths from the upper leftmost square to the lower right most square.
// Example:
// Input:
// 3, 7
// Output:
// 28

const uniquePaths = function (rows, columns) {
  if (rows === 1 || columns === 1) {
    return 1
  }
  return uniquePaths(rows - 1, columns) + uniquePaths(rows, columns - 1)
}

console.log(uniquePaths(3, 7))

// Using memoization to decrease the number of recursion calls we make
const uniquePathsMemo = function (rows, columns, memo = {}) {
  if (rows === 1 || columns === 1) {
    return 1
  }
  if (!memo[[rows, columns]]) {
    memo[[rows, columns]] = uniquePathsMemo(rows - 1, columns, memo) + uniquePathsMemo(rows, columns - 1, memo)
  }
  return memo[[rows, columns]]
}

console.log(uniquePathsMemo(3, 7))
