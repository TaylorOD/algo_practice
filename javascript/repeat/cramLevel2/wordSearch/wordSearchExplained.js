// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

// Example 1:

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true

// Example 2:

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true

// Example 3:

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false

// Create a function that takes in the board and a word
const wordSearch = (board, word) => {
  // Create a row variable that is equal to the length of the board
  const row = board.length
  // Create a column variable that is equal to the length of the column
  const column = board[0].length
  // Create our dfs which takes in the row, column, and index
  function callDFS(r, c, index) {
    if (word.length === index) {
      return true
    }
    if (r >= row || r < 0 || board[r][c] !== word[index]) {
      return false // Check if in bound
    }

    board[r][c] = "#" // mark as visited
    // Run dfs
    if (
      callDFS(r + 1, c, index + 1) ||
      callDFS(r - 1, c, index + 1) ||
      callDFS(r, c + 1, index + 1) ||
      callDFS(r, c - 1, index + 1)
    ) {
      return true
    }

    board[r][c] = word[index] // reset the board
  }
  // Create a nested loop of rows and columns
  for (let r = 0; r < row; r++) {
    for (let c = 0; c < column; c++) {
      // If the dfs returns true and the board row and column are true then return true
      if (board[r][c] === word[0] && callDFS(r, c, 0)) {
        return true
      }
    }
  }
  return false
}

console.log(
  wordSearch(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED"
  )
)
console.log(
  wordSearch(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "SEE"
  )
)
console.log(
  wordSearch(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCB"
  )
)
