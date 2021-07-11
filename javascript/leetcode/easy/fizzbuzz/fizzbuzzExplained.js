// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i if non of the above conditions are true.

// Example 1:

// Input: n = 3
// Output: ["1","2","Fizz"]
// Example 2:

// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]
// Example 3:

// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

// Create a function that takes in an integer
var fizzBuzz = function (n) {
  // Create a results array to store our results in
  let result = []
  // Create a for loop that will move through each number until it hits the input number
  for (let i = 1; i <= n; i += 1) {
    // If the current i is divisible by both 3 and 5 then insert fizzbuzz
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz")
      // If it's divisible by only 3 then insert fizz
    } else if (i % 3 === 0) {
      result.push("Fizz")
      // If it's divisible by only 5 then insert 5
    } else if (i % 5 === 0) {
      result.push("Buzz")
      // Else insert the number
    } else {
      result.push(`${i}`)
    }
  }
  // Return the result
  return result
}
// Call our function with several test inputs
console.log(fizzBuzz(3))
console.log(fizzBuzz(5))
console.log(fizzBuzz(15))
