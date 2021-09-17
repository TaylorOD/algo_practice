// https://leetcode.com/problems/non-overlapping-intervals/

// Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

// Example 1:

// Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
// Output: 1
// Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.
// Example 2:

// Input: intervals = [[1,2],[1,2],[1,2]]
// Output: 2
// Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.
// Example 3:

// Input: intervals = [[1,2],[2,3]]
// Output: 0
// Explanation: You don't need to remove any of the intervals since they're already non-overlapping.

// sort intervals
// create count
// Create previous both at 0
// For loop index starts at one and move through sorted
// current int start = sorted index 0
// if check if current start is less that sorted previous 1
// count p 1
// else
// previous = index
// return count

const nonoverlappingIntervals = (intervals) => {
  let sortedIntervals = intervals.sort((a,b) => a[1] - b[1])
  let count = 0
  let previous = 0
  for (let index = 1; index < sortedIntervals.length; index += 1) {
    let currentIntervalStart = sortedIntervals[index][0]
    if (currentIntervalStart < sortedIntervals[previous][1]) {
      count += 1
    } else {
      previous = index
    }
  }
  return count
}

console.log(
  nonoverlappingIntervals([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
  ])
)
console.log(
  nonoverlappingIntervals([
    [1, 2],
    [1, 2],
    [1, 2],
  ])
)
console.log(
  nonoverlappingIntervals([
    [1, 2],
    [2, 3],
  ])
)