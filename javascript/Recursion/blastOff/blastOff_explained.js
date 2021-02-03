// Write a recursive function that counts down from 10 to 0

// Create a function that takes in an input number
const blastOff = function (inputNumber) {
  // If the inputNumber is equal to zero (this is our base case) then print blastoff and return to end the function
  if (inputNumber === 0) {
    console.log("Blastoff!")
    return
    // Else print the number, decrement the number, and call the function recursively with the decremented number
  } else {
    console.log(inputNumber)
    inputNumber -= 1
    blastOff(inputNumber)
  }
}
// Call the function with 10 as our starting number
blastOff(10)
