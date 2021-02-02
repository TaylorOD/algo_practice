// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
// The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

// Create function that takes in a number
const threeAndFive = function (number) {
  // Create a sum variable that we will add to as we loop through the array
  let sum = 0
  // Create a for loop that will run until it is at the input number
  for (let i = 0; i < number; i += 1) {
    // If the index element is divisible by 3 or by 5 than increase the sum by the index
    if (i % 3 === 0 || i % 5 === 0) {
      sum = sum + i
    }
  }
  // Return the sum
  return sum
}
// Call the function with the test input
console.log(threeAndFive(10))
console.log(threeAndFive(1000))