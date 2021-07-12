// Write a function that accepts an array of numbers and returns the largest sum that could be computed from any "subsection" of the array.

const largestSubsectionSum = function (inputArray) {
  let currentSum = 0
  let greatestSum = 0

  for (let i = 0; i < inputArray.length; i += 1) {
    if (currentSum + inputArray[i] < 0) {
      currentSum = 0
    } else {
      currentSum += inputArray[i]

      if (currentSum > greatestSum) {
        greatestSum = currentSum
      }
    }
  }
  return greatestSum
}

console.log(largestSubsectionSum([3, -4, 4, -3, 5, -9]))
console.log(largestSubsectionSum([3, -4, 5, -3, 5, -9]))
console.log(largestSubsectionSum([1, 1, 0, -3, 5]))