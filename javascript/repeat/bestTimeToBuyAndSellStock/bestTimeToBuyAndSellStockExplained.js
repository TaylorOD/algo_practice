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

// Create a function that takes in an array of prices
const bestTimeToBuyAndSellStock = function (inputArray) {
  // Create a profit variable
  let profit = 0
  // Create a min variable that is equal to the first element in the array
  let min = inputArray[0]
  // Create a for loop that will move through our array
  for (let index = 1; index < inputArray.length; index += 1) {
    // If the min is greater than the current item being looped over then make it the new min
    if (min > inputArray[index]) {
      min = inputArray[index]
      // Else if the current item minus the min is greater than the profit then the profit equals the current item (price) minus the min
    } else if (inputArray[index] - min > profit) {
      profit = inputArray[index] - min
    }
  }
  // Return the profit variable
  return profit
}
// Call our function with two test cases
console.log(bestTimeToBuyAndSellStock([7, 1, 5, 3, 6, 4]))
console.log(bestTimeToBuyAndSellStock([7, 6, 4, 3, 1]))