// Say you have an array prices for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

// Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

// Example 1:

// Input: [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
//              Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Example 2:

// Input: [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
//              Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
//              engaging multiple transactions at the same time. You must sell before buying again.
// Example 3:

// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.

// Create function that takes in an inputArray
const buyAndSell = function (inputArray) {
  // Create our profit var which we will use to keep track of the results that we will return
  let profit = 0
  // Create a for loop that will run the length of the input array
  for (let i = 0; i < inputArray.length; i += 1) {
    // if the current element in the input array is greater than the one before it (example one: if 5 is greater than 1 on the second loop) then the max profit will add the result of buying/selling those two elements.
    // For test inputArray one: 1 is not greater than 7 so nothing happens, 5 is greater than 1 so 4 (the difference between the two) is added to max profit. 3 is not greater than 5. 6 is greater than 3 so 3 (the difference between the two) is added to profit (currently 4 from our first addition) to make it 7. Finally 4 is not greater than 6 so our final result is a profit of 7
    if (inputArray[i] > inputArray[i - 1]) {
      profit += inputArray[i] - inputArray[i - 1]
    }
  }
  // Return profit
  return profit
}
// Call the function with our three test cases
console.log(buyAndSell([7, 1, 5, 3, 6, 4]))
console.log(buyAndSell([1, 2, 3, 4, 5]))
console.log(buyAndSell([7, 6, 4, 3, 1]))