// Write a function that takes in an array of numbers and returns a sorted version of that array using selection sort.

// input:
// [8, 5, 2, 9, 5, 6, 3]
// output:
// [2, 3, 5, 5, 6, 8, 9]

// Create a function that takes in an array
function selectionSort(array) {
  // Create a startIndex function which we will use to travel through our array
  let startIndex = 0
  // Create a while loop that will run the length of the array except for the last element (we are using startIndex + 1 below so we need -1 here)
  while (startIndex < array.length - 1) {
    // Create smallestIndex which for now is equal to startIndex
    let smallestIndex = startIndex
    // Create a for loop that creates i which is equal to start index + 1
    for (let i = startIndex + 1; i < array.length; i += 1) {
      // If smallest index is greater than i (start index + 1) then smallest index is equal to i (since it is smaller)
      if (array[smallestIndex] > array[i]) {
        smallestIndex = i
      }
    }
    // Call our swap helper function
    swap(startIndex, smallestIndex, array)
    // Increment our startIndex
    startIndex += 1
  }
  // REturn our sorted array
  return array
}

// Helper function that takes in our start index, smallest index, and array and swaps them appropriately.
function swap(startIndex, smallestIndex, array) {
  let temp = array[smallestIndex]
  array[smallestIndex] = array[startIndex]
  array[startIndex] = temp
}

console.log(selectionSort([8, 5, 2, 9, 5, 6, 3]))
