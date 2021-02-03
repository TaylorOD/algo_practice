// Write a recursive function that takes in an array of numbers and doubles each number in place

const doubleArray = function (inputArray, index = 0) {
  if (index >= inputArray.length) {
    console.log(inputArray)
    return
  }
  inputArray[index] *= 2
  doubleArray(inputArray, index + 1)
}

doubleArray([1, 2, 3, 4, 5])