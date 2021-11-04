// https://leetcode.com/problems/peak-index-in-a-mountain-array/

// Let's call an array arr a mountain if the following properties hold:

// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... arr[i-1] < arr[i]
// arr[i] > arr[i+1] > ... > arr[arr.length - 1]
// Given an integer array arr that is guaranteed to be a mountain, return any i such that arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].

// Example 1:

// Input: arr = [0,1,0]
// Output: 1

// Example 2:

// Input: arr = [0,2,1,0]
// Output: 1

// Example 3:

// Input: arr = [0,10,5,2]
// Output: 1

// Example 4:

// Input: arr = [3,4,5,1]
// Output: 2

// Example 5:

// Input: arr = [24,69,100,99,79,78,67,36,26,19]
// Output: 2

// Constraints:

// 3 <= arr.length <= 104
// 0 <= arr[i] <= 106
// arr is guaranteed to be a mountain array.

// Follow up: Finding the O(n) is straightforward, could you find an O(log(n)) solution?

// Loop through and store largest variable
// return variable
const peakIndexInAMountainArray = (inputArray) => {
  let peak = inputArray[0]
  let returnValue = 0
  for (let index = 0; index < inputArray.length; index += 1) {
    if (peak < inputArray[index]) {
      peak = inputArray[index]
      returnValue = index
    }
  }
  return returnValue
}

console.log(peakIndexInAMountainArray([0, 1, 0]))
console.log(peakIndexInAMountainArray([0, 2, 1, 0]))
console.log(peakIndexInAMountainArray([0, 10, 5, 2]))
console.log(peakIndexInAMountainArray([3, 4, 5, 1]))
console.log(peakIndexInAMountainArray([24, 69, 100, 99, 79, 78, 67, 36, 26, 19]), "end")

const peakIndexInAMountainArrayBinarySearch = (inputArray) => {
  let low = 0
  let high = inputArray.length - 1

  while (low <= high) {
    let middle = Math.floor((low + high) / 2)
    if (inputArray[middle] < inputArray[middle + 1]) {
      low = middle + 1
    } else {
      high = middle - 1
    }
  }
  return low
}

console.log(peakIndexInAMountainArrayBinarySearch([0, 1, 0]), "start")
console.log(peakIndexInAMountainArrayBinarySearch([0, 2, 1, 0]))
console.log(peakIndexInAMountainArrayBinarySearch([0, 10, 5, 2]))
console.log(peakIndexInAMountainArrayBinarySearch([3, 4, 5, 1]))
console.log(peakIndexInAMountainArrayBinarySearch([24, 69, 100, 99, 79, 78, 67, 36, 26, 19]))