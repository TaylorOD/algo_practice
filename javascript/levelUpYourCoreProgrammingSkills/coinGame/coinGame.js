// Start with a number of coins and two players. Each player has the choice of removing either one or two coins on their turn.
// The player who removes the last coin loses.


const coinGame = function (numberOfCoins) {
  if ((numberOfCoins - 1) % 3 === 0) {
    return "them"
  } else {
    return "you"
  }
}

console.log(coinGame(10))
console.log(coinGame(11))
console.log(coinGame(15))
console.log(coinGame(13))