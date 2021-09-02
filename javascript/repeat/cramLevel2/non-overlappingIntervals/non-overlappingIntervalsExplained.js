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

// Create function that takes in an intervals array of arrays
const nonoverlappingIntervals = (intervals) => {
  // Sort out intervals - We don't have to assign this to a variable but I like to
  let sortedIntervals = intervals.sort((a, b) => a[1] - b[1])
  // Create a count variable which we will return later
  let count = 0
  // Create a previous variable
  let previous = 0
  // Create a for loop starting at index 1
  for (let index = 1; index < sortedIntervals.length; index += 1) {
    // Create a currentIntervalStart variable that is will be the first element in the variable that we are looping through
    let currentIntervalStart = sortedIntervals[index][0]
    // If the currentIntervalStart is less than the last variables end then increase the count
    if (currentIntervalStart < sortedIntervals[previous][1]) {
      count += 1
      // Else update the previous variable to be index so it moves through the array
    } else {
      previous = index
    }
  }
  // Return count
  return count
}