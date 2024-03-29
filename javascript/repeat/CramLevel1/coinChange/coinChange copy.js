// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

// Example 1:

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1

// Example 2:

// Input: coins = [2], amount = 3
// Output: -1

// Example 3:

// Input: coins = [1], amount = 0
// Output: 0

// Example 4:

// Input: coins = [1], amount = 1
// Output: 1

// Example 5:

// Input: coins = [1], amount = 2
// Output: 2

var coinChange = function (coins, amount) {
  let numberOfCoinsNeeded = Array(amount + 1).fill(Infinity)
  numberOfCoinsNeeded[0] = 0
  for (let coin of coins) {
    for (let index = coin; index <= amount; index += 1) {
      numberOfCoinsNeeded[index] = Math.min(numberOfCoinsNeeded[index], numberOfCoinsNeeded[index - coin] + 1)
    }
  }
  return numberOfCoinsNeeded[amount] === Infinity ? -1 : numberOfCoinsNeeded[amount]
}

console.log(coinChange([1, 2, 5], 11))
console.log(coinChange([2], 3))
console.log(coinChange([1], 0))
console.log(coinChange([1], 1))
console.log(coinChange([1], 2))
