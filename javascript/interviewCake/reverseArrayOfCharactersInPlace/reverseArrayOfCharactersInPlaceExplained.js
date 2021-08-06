// Write a function that takes an array of characters and reverses the letters in place. ↴

// Why an array of characters instead of a string?

// The goal of this question is to practice manipulating strings in place. Since we're modifying the input, we need a mutable ↴ type like an array, instead of JavaScript's immutable strings.

// Create a function that takes in an array of characters or numbers
const reverseArrayInPlace = function (inputArray) {
  // Create a left pointer at the start of the array
  let leftPointer = 0
  // Create a right pointer at the end of the array
  let rightPointer = inputArray.length - 1
  // While the left pointer is smaller than the right run the loop
  while (leftPointer < rightPointer) {
    // Temp, Left, Right. Whatever item you assign to is the next in your order
    // Create temp and assign it to the left pointer inputArray element
    let temp = inputArray[leftPointer]
    // Swap the left pointer and right pointer
    inputArray[leftPointer] = inputArray[rightPointer]
    // Swap the right pointer with temp
    inputArray[rightPointer] = temp
    // Increment our left and decrement our right
    leftPointer += 1
    rightPointer -= 1
  }
  // Return our modified array
  return inputArray
}
// Call our function with multiple inputs
console.log(reverseArrayInPlace([1, 2, 3]))
console.log(reverseArrayInPlace([3, 5, 5, 4]))
console.log(reverseArrayInPlace(["c", "a", "t"]))
