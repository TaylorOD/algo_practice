// Write a function reverseWords() that takes a message as an array of characters and reverses the order of the words in place. ↴

// Why an array of characters instead of a string?

// The goal of this question is to practice manipulating strings in place. Since we're modifying the message, we need a mutable ↴ type like an array, instead of JavaScript's immutable strings.

// For example:

//   const message = [ 'c', 'a', 'k', 'e', ' ',
//                 'p', 'o', 'u', 'n', 'd', ' ',
//                 's', 't', 'e', 'a', 'l' ];

// reverseWords(message);

// console.log(message.join(''));
// Prints: 'steal pound cake'

// JavaScript
// When writing your function, assume the message contains only letters and spaces, and all words are separated by one space.

// Create a function that takes in a message (inputArray)
const reverseWords = function (message) {
  // Call our helper function and pass in the message, left, and right pointer
  reverseCharacters(message, 0, message.length - 1)
  // Create a current word index variable
  let currentWordIndex = 0
  // Create a for loop that moves through the message length
  for (let index = 0; index < message.length; index += 1) {
    // If the index has reached the end of the message or the end of a word
    if (index === message.length || message[index] === " ") {
      // Call our helper function to reverse that word
      reverseCharacters(message, currentWordIndex, index - 1)
      // Increment our word index
      currentWordIndex = index + 1
    }
  }
  // Return the reversed message
  return message
}
// Create a helper function that will reverse the characters in an array
const reverseCharacters = function (inputArray, leftPointer, rightPointer) {
  // While the left pointer is smaller than the right swap the characters
  while (leftPointer < rightPointer) {
    let temp = inputArray[leftPointer]
    inputArray[leftPointer] = inputArray[rightPointer]
    inputArray[rightPointer] = temp

    leftPointer += 1
    rightPointer -= 1
  }
  // Return the reversed array
  return inputArray
}
// Create a test message
const message = ["c", "a", "k", "e", " ", "p", "o", "u", "n", "d", " ", "s", "t", "e", "a", "l"]
// Call our function with message passed in
console.log(reverseWords(message))
