// Given an array of numbers, return a new array whose values are the original array’s value doubled.

// Input: [4, 2, 5, 99, -4]
// Output: [8, 4, 10, 198, -8]

// Using a map function
const doubleArray = function (array) {
  let result = array.map(function (number) {
    return number * 2
  })
  return result
}

console.log(doubleArray([4, 2, 5, 99, -4]))

// Using a while loop
const doubleArrayWhileLoop = function (array) {
  let index = 0
  let result = []
  while (index < array.length) {
    result.push(array[index] * 2)
    index += 1
  }
  return result
}

console.log(doubleArrayWhileLoop([4, 2, 5, 99, -4]))

// Using a for loop
const doubleArrayForLoop = function (array) {
  let result = []
  for (let i = 0; i < array.length; i += 1) {
    result.push(array[i] * 2)
  }
  return result
}

console.log(doubleArrayForLoop([4, 2, 5, 99, -4]))
