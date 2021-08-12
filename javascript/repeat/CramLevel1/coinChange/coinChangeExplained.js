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

// Create a function that takes in an array of coin values, and the amount or goal to make
var coinChange = function (coins, amount) {
  // Create an array which is the number of coins needed.
  // We start it as the amount plus 1 and fill it with Infinity
  const numberOfCoinsNeeded = Array(amount + 1).fill(Infinity)
  // We make the first value in the numberOfCoinsNeeded array equal to zero
  numberOfCoinsNeeded[0] = 0
  // For of loop where we move through each coin denomination
  for (let coin of coins) {
    // For loop to count up to the amount
    for (let i = coin; i <= amount; i++) {
      // Set the number of coins needed index equal to the smaller - number of coins needed index or number of coins needed index -coin plus 1
      numberOfCoinsNeeded[i] = Math.min(numberOfCoinsNeeded[i], numberOfCoinsNeeded[i - coin] + 1)
    }
  }
  // Return the number of coins needed[amount]. If it equals infinity then return -1
  return numberOfCoinsNeeded[amount] === Infinity ? -1 : numberOfCoinsNeeded[amount]
}

console.log(coinChange([1,2,5], 11))
console.log(coinChange([2], 3))
console.log(coinChange([1], 0))
console.log(coinChange([1], 1))
console.log(coinChange([1], 2))