// There is a numerical sequence known as "Triangular Numbers."
// The pattern begins as 1, 3, 6, 10, 15, 21, and continues onward with the Nth number in the pattern which is N plus the previous number.
// For example the 7th number in the sequence is 28 since it's 7 (which is N) plus 21 (the previous number in the sequence).
// Write a function that accepts a number for N and returns the correct number fro the series.
// Example:
// Input:
// 7
// Output:
// 28

// Input:
// 9
// Output:
// 45

// Create a function that takes in a number
const triangularNumbers = function (inputNumber) {
  // If the input number has been decremented to 0 then return it - Base Case
  if (inputNumber === 0) {
    return inputNumber
  }
  // Else return the input Number plus our recursive call of our function which we will return with our input number - 1
  return inputNumber + triangularNumbers(inputNumber - 1)
}
// Call our function with our two test cases
console.log(triangularNumbers(7))
console.log(triangularNumbers(9))
