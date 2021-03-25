// Write a function that accepts an array of numbers and returns the largest sum that could be computed from any "subsection" of the array.

// Create a function that takes in an inputArray
const largestSubsectionSum = function (inputArray) {
  // Create a currentSum and greatestSum var and set them to 0
  let currentSum = 0
  let greatestSum = 0

  // Create a for loop that will move through each item in the array
  for (let i = 0; i < inputArray.length; i += 1) {
    // If the currentSum plus the current item in the array are less that zero than currentSum is set to zero.
    // We are better at starting form zero than a negative number
    if (currentSum + inputArray[i] < 0) {
      currentSum = 0
      // If it is greater than zero than add the current item being iterated over to currentSum
    } else {
      currentSum += inputArray[i]
      // If the currentSum is greater than the greatestSum than the greatestSum is set to equal the currentSum
      if (currentSum > greatestSum) {
        greatestSum = currentSum
      }
    }
  }
  // Return the greatestSum
  return greatestSum
}
// Call out function with three test cases
console.log(largestSubsectionSum([3, -4, 4, -3, 5, -9]))
console.log(largestSubsectionSum([3, -4, 5, -3, 5, -9]))
console.log(largestSubsectionSum([1, 1, 0, -3, 5]))
