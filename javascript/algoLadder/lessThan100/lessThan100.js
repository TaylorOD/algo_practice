// Given an array of numbers, return a new array that contains all numbers from the original array that are less than 100

// test input/output:
// input [99, 101, 88, 4, 2000, 50]
// output [99, 88, 4, 50]

const lessThan100 = function (array) {
  let result = []

  array.filter(function (number) {
    if (number < 100) {
      result.push(number)
    }
  })

  return result
}

console.log(lessThan100([99, 101, 88, 4, 2000, 50]))

// Sometimes people will not let you use a filter so this method uses a forEach loop
const lessThan100forEach = function (array) {
  let result = []

  array.forEach(function (number) {
    if (number < 100) {
      result.push(number)
    }
  })
  return result
}

console.log(lessThan100forEach([99, 101, 88, 4, 2000, 50]))

// Solved using while loop
const lessThan100While = function (array) {
  let result = []
  let index = 0

  while (index < array.length) {
    if (array[index] < 100) {
      result.push(array[index])
    }
    index += 1
  }
  return result
}

console.log(lessThan100forEach([99, 101, 88, 4, 2000, 50]))