// Given an array of numbers, return true if the array is a "100 Coolio Array", or false if it is not.

// A "100 Coolio Array" meets the following criteria:

// Its first and last numbers add up to 100,
// Its second and second-to-last numbers add up to 100,
// Its third and third-to-last numbers add up to 100,
// and so on and so forth.

// Here are examples of 100 Coolio Arrays:

// [1, 2, 3, 97, 98, 99]
// [90, 20, 70, 100, 30, 80, 10]

const coolio = function (inputArray) {
  let result = false
  let pointerEnd = inputArray.length - 1

  for (let i = 0; i < inputArray.length / 2; i += 1) {
    if (inputArray[i] + inputArray[pointerEnd] === 100) {
      pointerEnd -= 1
      result = true
    } else {
      result = false
      break
    } 
  }
  return result
}

console.log(coolio([1, 2, 3, 97, 98, 99]))
console.log(coolio([90, 20, 70, 100, 30, 80, 10]))