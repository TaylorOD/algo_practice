// Create a function that takes in an number and establishes memo
const fibonacciMemo = function (input_number, memo = {}) {
  // If the input number is 0 or 1 then return the input number - base case
  if (input_number === 0 || input_number === 1) {
    return input_number
  }
  // If the memo hash does not have the input number in it then add it wit a recursive call
  if (!memo[input_number]) {
    memo[input_number] = fibonacciMemo(input_number - 2, memo) + fibonacciMemo(input_number - 1, memo)
  }
  // If it does then return the input number
  return memo[input_number]
}
// Call our function with test data
console.log(fibonacciMemo(8))

// Create a function that takes in an input number
function fibonacciHash(n) {
  // Create a hash with the first two variables in it
  let answer = [0, 1]
  // Create a for loop that runs until the number
  for (let i = 2; i <= n; i++) {
    // Add the next number to the array and increment
    answer.push(answer[i - 2] + answer[i - 1])
  }
  // pull the last number from the array as the answer
  return answer.pop()
}
// Call our function with test data
console.log(fibonacciHash(8))
