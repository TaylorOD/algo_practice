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

// Create a function that takes in an array
  // Create a front index/pointer
  // Create a back index/pointer
  // Create a for loop that moves through the array
    // Create temp and make it equal to front
    // Make front equal to back
    // Make back equal to temp
    // Increment left pointer
    // Decrement right pointer
  //
  // Return reversed array
//

const reverseWords = function (message) {
  reverseCharacters(message, 0, message.length - 1)

  let currentWordIndex = 0
  for (let index = 0; index < message.length; index += 1) {
    if (index === message.length || message[index] === ' ') {
      reverseCharacters(message, currentWordIndex, index - 1)
      currentWordIndex = index + 1
    }
  }
  return message
}


const reverseCharacters = function (inputArray, leftPointer, rightPointer) {
  while (leftPointer < rightPointer) {
    let temp = inputArray[leftPointer]
    inputArray[leftPointer] = inputArray[rightPointer]
    inputArray[rightPointer] = temp

    leftPointer += 1
    rightPointer -= 1
  }
  return inputArray
}

const message = [ 'c', 'a', 'k', 'e', ' ',
              'p', 'o', 'u', 'n', 'd', ' ',
              's', 't', 'e', 'a', 'l' ];

console.log(reverseWords(message))