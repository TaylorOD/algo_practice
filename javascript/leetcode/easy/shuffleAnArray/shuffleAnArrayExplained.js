// Given an integer array nums, design an algorithm to randomly shuffle the array. All permutations of the array should be equally likely as a result of the shuffling.

// Implement the Solution class:

// Solution(int[] nums) Initializes the object with the integer array nums.
// int[] reset() Resets the array to its original configuration and returns it.
// int[] shuffle() Returns a random shuffling of the array.


// Example 1:

// Input
// ["Solution", "shuffle", "reset", "shuffle"]
// [[[1, 2, 3]], [], [], []]
// Output
// [null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]

// Explanation
// Solution solution = new Solution([1, 2, 3]);
// solution.shuffle();    // Shuffle the array [1,2,3] and return its result.
                          // Any permutation of [1,2,3] must be equally likely to be returned.
                          // Example: return [3, 1, 2]
// solution.reset();      // Resets the array back to its original configuration [1,2,3]. Return [1, 2, 3]
// solution.shuffle();    // Returns the random shuffling of array [1,2,3]. Example: return [1, 3, 2]

// Create a function that takes in an inputArray of numbers
const shuffleAnArray = function (inputArray) {
  this.inputArray = inputArray || []
}
// Create a function that resets that array
shuffleAnArray.prototype.reset = function () {
  return this.inputArray
}
// Create a function that shuffles that array
shuffleAnArray.prototype.shuffle = function () {
  // Create a random array
  var randomArray = []
  // Create a for each loop to copy each value
  this.inputArray.forEach((val, key) => (randomArray[key] = val)) // need to copy key value one by one
  // Create a for loop to add a random value into our random array for each index
  for (var i = 0; i < randomArray.length; i++) {
    var randomIndex = Math.floor(Math.random() * (randomArray.length - i)) + i // be careful to get the floor of random
    var temp = randomArray[i]
    randomArray[i] = randomArray[randomIndex]
    randomArray[randomIndex] = temp
  }
  // Return randomArray
  return randomArray
}