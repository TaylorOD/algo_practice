// Write a function that takes in a sorted array of integers as well as a target
// integer. The function should use the Binary Search algorithm to determine if
// the target integer is contained in the array and should return its index if it
// is, otherwise -1

// Example:
// Input:
// [0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33
// [1, 5, 23, 111], 35

// Output:
// 33
// -1

function binarySearch(array, target) {
  return binarySearchHelper(array, target, 0, array.length - 1)
}

function binarySearchHelper(array, target, left, right) {
  if (left > right) {
    return -1
  }
  const middle = Math.floor((left + right) / 2)
  const potentialMatch = array[middle]

  if (target === potentialMatch) {
    return middle
  } else if (target < potentialMatch) {
    return binarySearchHelper(array, target, left, middle - 1)
  } else {
    return binarySearchHelper(array, target, middle + 1, right)
  }
}

console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33))
console.log(binarySearch([1, 5, 23, 111], 35))
