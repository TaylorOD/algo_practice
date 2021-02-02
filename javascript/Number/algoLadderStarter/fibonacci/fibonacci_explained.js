// Write a function that gives the Nth number of the Fibonacci Sequence

// Create function that takes in a number
const fibonacci = function (number) {
  // Create a numberOne variable that we represent the first Fibonacci item
  let numberOne = 0
  // Create a numberTwo variable that we represent the second Fibonacci item
  let numberTwo = 1
  // Create a results variable that we will assigns a value to in the for loop below
  let result = undefined
  
  // Create for loop that will run until the length of the number
  for (let i = 0; i < number; i += 1) {
    // Make the results variable equal to NumberOne + NumberTwo
    result = numberOne + numberTwo
    // Make numberOne variable equal to numberTwo variable 
    numberOne = numberTwo
    // Make numberTwo variable equal to result variable 
    numberTwo = result
  } 
  // Return numberOne (NumberOne is the Fibonacci that aligns with the input number)
  return numberOne
}
// Call the function with an input number
console.log(fibonacci(7))