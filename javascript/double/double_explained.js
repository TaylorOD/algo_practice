// Given an array of numbers, return a new array whose values are the original array’s value doubled.

// Input: [4, 2, 5, 99, -4]
// Output: [8, 4, 10, 198, -8]

// Using a map function

// Create function that takes in array
const doubleArray = function (array) {
  // Create results array using a map function which takes in each numbers of the array and returns it as double
  let result = array.map(function (number) {
    // map each number in the array into the function multiplies by 2
    return number * 2
  })
  // return result array
  return result
}
// Call the function with givin input
console.log(doubleArray([4, 2, 5, 99, -4]))

// Using a while loop

// Create function that takes in array
const doubleArrayWhileLoop = function (array) {
  // Create index element
  let index = 0
  // Create empty result array to push items into
  let result = []
  // Create a while loop that will run until index is equal to the arrays length
  while (index < array.length) {
    // Push array[index] multiplied by two into the result array
    result.push(array[index] * 2)
    // increase index by 1 so each item in the array will be looped through
    index += 1
  }
    // return result array
  return result
}
// Call the function with givin input
console.log(doubleArrayWhileLoop([4, 2, 5, 99, -4]))

// Using a for loop

// Create function that takes in array
const doubleArrayForLoop = function (array) {
  // Create an empty results array
  let result = []
  // Create a for loop which will run the length of the array and increase i/index for us each loop
  for (let i = 0; i < array.length; i += 1) {
    // Push each element of the array multiplied by two into the results array
    result.push(array[i] * 2)
  }
    // return result array
  return result
}
// Call the function with givin input
console.log(doubleArrayForLoop([4, 2, 5, 99, -4]))
