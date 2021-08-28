// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

// Example 2:

// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

// Sort intervals - using sort on input array
// Create result which is first sorted interval
// For loop to move through sorted internals
// Create current index intercal
// Create last internval = reusltresult.length -1
// If the current[0] <= last[1]
// last[1] = math.max(sorted[index][0], sorted[index][1])
// return result

// sort
// create result qhich is the first one in an array
// for loop
  // create currentInterval
  // Create lastInterval
  // If currentl front less than or equal to last 1 (2)
    // last 1 = math.max(current[0], current[1])
    // else
      // results add current interval
// return result

const mergeIntervals = function (inputArray) {
  let sortedIntervals = inputArray.sort((a, b) => a - b)
  let result = [sortedIntervals[0]]
  for (let index = 0; index < sortedIntervals.length; index += 1) {
    let currentInterval = sortedIntervals[index]
    let lastInterval = result[result.length - 1]
    // If the current 0 (opening) is less than or equal to the last 1 (second and this will always be the last one in the array)
    if (currentInterval[0] <= lastInterval[1]) {
      // Make the last either the first or second one depending on which one is bigger - We've checked if it should be adjusted now we can adjust it with either
      lastInterval[1] = Math.max(currentInterval[0], currentInterval[1])
      // If it shouldnt be adjusted then add it to the results. That will also make the lastInterval update
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