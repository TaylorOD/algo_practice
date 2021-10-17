// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5

// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0

// Explanation: In this case, no transactions are done and the max profit = 0.

// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104

// create function to take in inputStock
// Create previousProfit = 0
// Create maxProfit = 0
// Create for loop to move through stock price
// If current stock price
// current
// else
// maxProfit =
// Return maxProfit
//

// Create a function that takes in an inputPriceArray
const buyAndSell = (inputPriceArray) => {
  // Set the minStockCost
  let minStockCost = inputPriceArray[0]
  // Create our profit at 0
  let profit = 0
  // Create a for loop that moves through our stock array starting at 1
  for (let currentStock = 1; currentStock < inputPriceArray.length; currentStock += 1) {
    // If the minStockCost is less than the current stock than update the minStock Cost
    if (minStockCost > inputPriceArray[currentStock]) {
      minStockCost = inputPriceArray[currentStock]
      // Otherwise update the profit to whatever is greater, the profit or the currentStock - the minStockCost
    } else {
      profit = Math.max(profit, inputPriceArray[currentStock] - minStockCost)
    }
  }
  // Return the profit
  return profit
}
// Call the function with our inputArrays
console.log(buyAndSell([7, 1, 5, 3, 6, 4]))
console.log(buyAndSell([7, 6, 4, 3, 1]))
