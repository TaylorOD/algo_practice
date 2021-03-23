// Start with a number of coins and two players. Each player has the choice of removing either one or two coins on their turn.
// The player who removes the last coin loses.

// Create function that takes in a number of coins
const coinGame = function (numberOfCoins) {
  // If the number of coins -1 is divisible by 3 then return them
  if ((numberOfCoins - 1) % 3 === 0) {
    return "them"
    // Else return you
  } else {
    return "you"
  }
}
// Call our function with our test inputs
console.log(coinGame(10))
console.log(coinGame(11))
console.log(coinGame(15))
console.log(coinGame(13))
