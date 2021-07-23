// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

// You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

// Example 1:

// Input: n = 5, bad = 4
// Output: 4

// Explanation:
// call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true
// Then 4 is the first bad version.

// Example 2:

// Input: n = 1, bad = 1
// Output: 1

// Create firstBadVersion function that calls isBadVersion api
const firstBadVersion = function (isBadVersion) {
  // Return the response of the api call which we will pass the version number
  return function (versionNumber) {
    // Create a min var which starts at null
    let min = null
    // Create a start var that starts at 1
    let start = 1
    // Create the end which is the passed in versionNumber
    let end = versionNumber

    // Create a while loop which will move through the versionNumbers
    while (start <= end) {
      // Create a mid point by getting the rounded down version of start+end divided by 2.
      // We will use this to do a binary search below
      const mid = Math.floor((start + end) / 2)
      // If the version is bad then set the min to equal min and decrease the end var
      if (isBadVersion(mid)) {
        min = mid
        end = mid - 1
        // Else increase the start var
      } else {
        start = mid + 1
      }
    }
    // Return min var
    return min
  }
}