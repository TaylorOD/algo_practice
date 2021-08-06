// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1

// Example 2:

// Input: grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// Output: 3

// Create a function that takes in a grid of islands and water
const numberOfIslands = function (inputGrid) {
  // Create a count variable to track our island count
  let count = 0
  // Create a for loop to move through each row
  for (let row = 0; row < inputGrid.length; row += 1) {
    // Create a for loop to move through each column
    for (let col = 0; col < inputGrid[0].length; col += 1) {
      // If the current item on the grid is an possible island (1) then increment our count and do our depthFirstSearch call
      if (inputGrid[row][col] === "1") {
        count += 1
        depthFirstSearch(inputGrid, row, col)
      }
    }
  }
  // Return count variable
  return count
}
// Create our depthFirstSearch helper function which takes in our grid, current row, and current column
function depthFirstSearch(grid, currentRow, currentCol) {
  // Check to make sure we are in bounds else return
  if (currentRow < 0 || currentRow >= grid.length || currentCol < 0 || currentCol >= grid[0].length) {
    return
  }
  // Create a value to equal our current location on the grid
  const value = grid[currentRow][currentCol]
  // If that value is a 1 then dfs through our grid
  if (value === "1") {
    grid[currentRow][currentCol] = "#"
    depthFirstSearch(grid, currentRow + 1, currentCol)
    depthFirstSearch(grid, currentRow - 1, currentCol)
    depthFirstSearch(grid, currentRow, currentCol + 1)
    depthFirstSearch(grid, currentRow, currentCol - 1)
  }
}
// Call our function with two test inputs
console.log(numberOfIslands([
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]))
console.log(numberOfIslands([
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]))