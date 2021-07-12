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

// Create binary search function that takes in an array and target number
function binarySearch(array, target) {
  // Call binarySearch helper function and pass in array, target, left index, and right index
  return binarySearchHelper(array, target, 0, array.length - 1)
}
// Create helper function that takes in array, target, left, and right pointers
function binarySearchHelper(array, target, left, right) {
  // If the left is greater than right return one - base case
  if (left > right) {
    return -1
  }
  // Create middle var by diving left by right
  const middle = Math.floor((left + right) / 2)
  // Create potential match var which is the middle of the array
  const potentialMatch = array[middle]

  // If the target is equal to the potential match then return middle
  if (target === potentialMatch) {
    return middle
    // If it is less than the potential match call our helper function recursively and shrink the middle by one on the right side
  } else if (target < potentialMatch) {
    return binarySearchHelper(array, target, left, middle - 1)
    // Else call our helper function recursively and add to our left side (effectively shrinking the right side by 1)
  } else {
    return binarySearchHelper(array, target, middle + 1, right)
  }
}
// Call out function with two test inputs
console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33))
console.log(binarySearch([1, 5, 23, 111], 35))