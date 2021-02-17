// Write three different implementations of a function that finds the greatest number within an array.
// Write one function that is O(N^2), one that is O(N log N), and one that is O(N)

// O(N^2) - Solution uses nested loops
const greatestNumberSlow = function (inputArray) {
  let greatestNumber = inputArray[0]
  for (let i = 0; i < inputArray.length; i += 1) {
    if (inputArray[i] > greatestNumber) {
      greatestNumber = inputArray[i]
    }
    for (let j = 0; j < inputArray.length; j += 1) {
      if (inputArray[j] > greatestNumber) {
        greatestNumber = inputArray[j]
      }
    }
  }
  return greatestNumber
}

// O(N log N) - Solution uses sort then calls the last element
const greatestNumberFaster = function (inputArray) {
  inputArray.sort((a, b) => a - b)
  return inputArray[inputArray.length - 1]
}

// O(N) - Solution updates the greatest number as the loop iterates
const greatestNumberFastest = function (inputArray) {
  let greatestNumberSoFar = inputArray[0]
  for (let i = 0; i < inputArray.length; i += 1) {
    if (inputArray[i] > greatestNumberSoFar) {
      greatestNumberSoFar = inputArray[i]
    }
  }
  return greatestNumberSoFar
}

console.log(greatestNumberSlow([1, 4, 6, 3, 2, 100, 9, 12]))
console.log(greatestNumberFaster([1, 4, 6, 3, 2, 100, 9, 12]))
console.log(greatestNumberFastest([1, 4, 6, 3, 2, 100, 9, 12]))
