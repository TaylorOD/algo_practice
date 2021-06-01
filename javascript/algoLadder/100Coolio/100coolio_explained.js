// Given an array of numbers, return true if the array is a "100 Coolio Array", or false if it is not.

// A "100 Coolio Array" meets the following criteria:

// Its first and last numbers add up to 100,
// Its second and second-to-last numbers add up to 100,
// Its third and third-to-last numbers add up to 100,
// and so on and so forth.

// Here are examples of 100 Coolio Arrays:

// [1, 2, 3, 97, 98, 99]
// [90, 20, 70, 100, 30, 80, 10]

// Creat function that takes in input array
const coolio = function (inputArray) {
  // Create a result variable that starts as false
  let result = false
  // Create a pointer that will start at the back of our array and increment down
  let pointerEnd = inputArray.length - 1

  // Create a for loop that will run the length of half the array. 
  // It does not need to run the full array since it will meet our back pointer in the middle.
  for (let i = 0; i < inputArray.length / 2; i += 1) {
    // If the inputArray pointer at the start and the end pointer equal 100 than decrement the pointers and set result to true.
    if (inputArray[i] + inputArray[pointerEnd] === 100) {
      pointerEnd -= 1
      result = true
      // Else set the result to false and end the loop. If one set is not true the array is not a coolio array.
    } else {
      result = false
      break
    }
  }
  // Return the result variable
  return result
}
// Call the function with both of our test inputs.
console.log(coolio([1, 2, 3, 97, 98, 99]))
console.log(coolio([90, 20, 70, 100, 30, 80, 10]))

// This is an O(log N) function and in many cases will be quite fast due to the break statement.
// You could improve this function by adding a check that will only run the function if the input array contains an even number of items.