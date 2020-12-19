// Write a function that takes in an array of integers and returns that array sorted.
// Use Insertion Sort.

// Input: [8, 5, 2, 9, 5, 6, 3]
// Output: [2, 3, 5, 5, 6, 8, 9]

// Create function that takes in an array
const insertionSort = function (array) {
  // Create for loop that moves through each item in the array
  for (let i = 0; i < array.length; i += 1) {
    // Create a variable j which is equal to i
    let j = i
    // Create while loop that moves through each item in the array moving to the front of the array
    while (j > 0 && array[j] < array[j - 1]) {
      // Call swap function
      swap(j, j - 1, array)
      // Decrement the j variable
      j -= 1
    }
  }
  // Return a sorted array
  return array
}
// Create swap function that takes in i, j, and the array
function swap (i, j, array) {
  // Create temp to represent array[j]
  let temp = array[j]
  // Set array[j] equal to array[i]
  array[j] = array[i]
  // Set array[i] equal to temp
  array[i] = temp
}
// Call insertionSort with input array
console.log(insertionSort([8, 5, 2, 9, 5, 6, 3]))