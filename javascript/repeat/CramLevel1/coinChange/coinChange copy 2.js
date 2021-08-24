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

// Create number of coins needed - array(amount + 1).fill(infinity)
// numberOfCoinsNeeded[0] = 0
// for (let coin of coins)
  // let index = coin; index <= amount; index += 1
  // numberofCoinsNeeded[index] = Math.min(numberOfCoinsNeeded[index], number of coins Needed[index - coin] + 1)
// return numberOfCoinsNeeded[amount] === Infinity ? -1 : numberOfCoundsNeededpamount



var coinChange = function (coins, amount) {
  // Create an array that is filled with infinity values. It is filled with one more value than the amount.
  let numberOfCoinsNeeded = Array(amount + 1).fill(Infinity)
  // Make the first value equal to zero
  numberOfCoinsNeeded[0] = 0
  // Create an of loop to move through the coins array
  for (let coin of coins) {
    // Create a for loop to move each coin through the amount
    for (let index = coin; index <= amount; index += 1) {
      // Make the current coin value the lessor of either the current coin value or the current coin value - the coin + 1
      numberOfCoinsNeeded[index] = Math.min(numberOfCoinsNeeded[index], numberOfCoinsNeeded[index - coin] + 1)
    }
  }
  // Return -1 if there are any infinitys or return the amount
  return numberOfCoinsNeeded[amount] === Infinity ? -1 : numberOfCoinsNeeded[amount]
}

console.log(coinChange([1, 2, 5], 11))
console.log(coinChange([2], 3))
console.log(coinChange([1], 0))
console.log(coinChange([1], 1))
console.log(coinChange([1], 2))
