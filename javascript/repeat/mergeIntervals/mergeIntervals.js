// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

const mergeIntervals = function (inputArray) {
  let sortedIntervals = inputArray.sort((a, b) => {
    return a - b
  })
  let result = [sortedIntervals[0]]
  for (let index = 0; index < sortedIntervals.length; index += 1) {
    let currentInterval = sortedIntervals[index]
    let lastInterval = result[result.length - 1]
    if (currentInterval[0] <= lastInterval[1]) {
      lastInterval[1] = Math.max(sortedIntervals[index][0], sortedIntervals[index][1])
    } else {
      result.push(currentInterval)
    }
  }
  return result
}

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