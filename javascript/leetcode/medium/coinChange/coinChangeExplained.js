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

const coinChange = (coins, amount) => {
  // Create an array has that the amount + 1 values in it. Fill that array with Infinity values.
  // Later we will check against those values to see if we can create the amount needed or not.
  const numberOfCoinsNeeded = Array(amount + 1).fill(Infinity)
  // Make the first element in the number of coins needed array 0
  numberOfCoinsNeeded[0] = 0
  // For let of loop to loop through each coin
  for (let coin of coins) {
    // Create a for loop to check each coin to see if we can create the amount with that coin
    // If we can then update the number of coins needed
    for (let i = coin; i <= amount; i++) {
      // Iterate through the entire amount from coin
      // Update minimum number of needed coins.
      numberOfCoinsNeeded[i] = Math.min(numberOfCoinsNeeded[i], numberOfCoinsNeeded[i - coin] + 1)
    }
  }
  // If the last element is Infinity, then we cannot make the amount.
  // Return -1 or the amount of coins needed
  return numberOfCoinsNeeded[amount] === Infinity ? -1 : numberOfCoinsNeeded[amount]
}

console.log(coinChange([1, 2, 5], 11))
console.log(coinChange([2], 3))
console.log(coinChange([1], 0))
console.log(coinChange([1], 1))
console.log(coinChange([1], 2))