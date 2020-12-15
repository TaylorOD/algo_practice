// Given an array of numbers, return a new array that contains all numbers from the original array that are less than 100

// test input/output:
// input [99, 101, 88, 4, 2000, 50]
// output [99, 88, 4, 50]

// Create function that takes in array
const lessThan100 = function (array) {
  // create array to store results
  let result = []
  // call .filter function on array 
  array.filter(function (currentNumber) {
    // if the number in the array is less than 100 than add the number to results array
    if (currentNumber < 100) {
      // add number to results array
      result.push(currentNumber)
    }
  })
  // return result array
  return result
}
// call result array with test input
console.log(lessThan100([99, 101, 88, 4, 2000, 50]))

// Sometimes people will not let you use a filter so this method uses a forEach loop
const lessThan100forEach = function (array) {
  // create array to store results
  let result = []
  // Create a forEach loop that will take in each number in the array
  array.forEach(function (currentNumber) {
    // if the current number is less than 100 add it to the results array
    if (currentNumber < 100) {
      // add number to result array
      result.push(currentNumber)
    }
  })
  // return results array
  return result
}
// Call function with test inputs
console.log(lessThan100forEach([99, 101, 88, 4, 2000, 50]))