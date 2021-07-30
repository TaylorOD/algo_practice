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

const numberOfIslands = function (inputGrid) {
  let count = 0

  for (let row = 0; row < inputGrid.length; row += 1) {
    for (let col = 0; col < inputGrid[0].length; col += 1) {
      if (inputGrid[row][col] === "1") {
        count += 1
        depthFirstSearch(inputGrid, row, col)
      }
    }
  }
  return count
}

function depthFirstSearch(grid, row, col) {
  // bound check
  if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) {
    return
  }

  const value = grid[row][col]
  if (value === "1") {
    grid[row][col] = "#"
    depthFirstSearch(grid, row + 1, col)
    depthFirstSearch(grid, row - 1, col)
    depthFirstSearch(grid, row, col + 1)
    depthFirstSearch(grid, row, col - 1)
  }
}

console.log(
  numberOfIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ])
)
console.log(
  numberOfIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
  ])
)
