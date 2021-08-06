// Write a function that takes an array of characters and reverses the letters in place. ↴

// Why an array of characters instead of a string?

// The goal of this question is to practice manipulating strings in place. Since we're modifying the input, we need a mutable ↴ type like an array, instead of JavaScript's immutable strings.

const reverseArrayInPlace = function (inputArray) {
  let leftPointer = 0
  let rightPointer = inputArray.length - 1

  while (leftPointer < rightPointer) {
    let temp = inputArray[leftPointer]
    inputArray[leftPointer] = inputArray[rightPointer]
    inputArray[rightPointer] = temp

    leftPointer += 1
    rightPointer -= 1
  }

  return inputArray
}

console.log(reverseArrayInPlace([1, 2, 3]))
console.log(reverseArrayInPlace([3, 5, 5, 4]))
console.log(reverseArrayInPlace(["c", "a", "t"]))
