// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

// Create a function that takes in an inputArray
const mergeIntervals = function (inputArray) {
  // Sort the items in that array
  let sortedIntervals = inputArray.sort((a, b) => {
    return a - b
  })
  // Create a result variable with the first sorted interval
  let result = [sortedIntervals[0]]
  // Create a for loop that moves through the sorted intervals
  for (let index = 0; index < sortedIntervals.length; index += 1) {
    // Create a current interval variable using index
    let currentInterval = sortedIntervals[index]
    // Create a last internal variable using result.length - 1
    let lastInterval = result[result.length - 1]
    // if the current internal start time is less than or equal to the last internal end time
    if (currentInterval[0] <= lastInterval[1]) {
      // Make the last internal end time equal to the max number
      lastInterval[1] = Math.max(sortedIntervals[index][0], sortedIntervals[index][1])
    } else {
      // Else push the current interval to our results
      result.push(currentInterval)
    }
  }
  // Return our results array
  return result
}
// Call our function with two test inputs
console.log(
  mergeIntervals([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
)
console.log(
  mergeIntervals([
    [1, 4],
    [4, 5],
  ])
)