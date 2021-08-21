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
    for (let column = 0; column < inputGrid[0].length; column += 1) {
      if (inputGrid[row][column] === "1") {
        count += 1
        depthFirstSearch(inputGrid, row, column)
      }
    }
  }
  return count
}

function depthFirstSearch(grid, row, column) {
  if (row < 0 || column < 0 || row >= grid.length || column >= grid[0].length) {
    return
  }

  let value = grid[row][column]

  if (value === "1") {
    grid[row][column] = "#"
    depthFirstSearch(grid, row + 1, column)
    depthFirstSearch(grid, row - 1, column)
    depthFirstSearch(grid, row, column + 1)
    depthFirstSearch(grid, row, column - 1)
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
