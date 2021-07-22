// Create our number array which we will sort
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

// Create our main function that takes in an array, a left, and a right var
function quickSort(array, left, right) {
  // Create these vars since they will be used below during recursion
  let pivot
  let partitionIndex

  // If the left side if less than the right side
  if (left < right) {
    // The pivot is the right
    pivot = right
    // The partition index is found by calling our helper function
    partitionIndex = partition(array, pivot, left, right)

    //recursively sort left and right
    quickSort(array, left, partitionIndex - 1)
    quickSort(array, partitionIndex + 1, right)
  }
  // Return our sorted array
  return array
}
// Create our partition function that takes in an array, pivot, left, and right
function partition(array, pivot, left, right) {
  // make the pivot value equal to the array, pivot value
  let pivotValue = array[pivot]
  // make the partitionIndex equal to left
  let partitionIndex = left
  // Create a for loop that will swap all items on the left side of the partition
  for (let i = left; i < right; i++) {
    if (array[i] < pivotValue) {
      swap(array, i, partitionIndex)
      partitionIndex++
    }
  }
  // Swap the right side of the partition
  swap(array, right, partitionIndex)
  // Return the partition now that its been sorted
  return partitionIndex
}
// Swap helper function. Swaps the two index's passed in
function swap(array, firstIndex, secondIndex) {
  var temp = array[firstIndex]
  array[firstIndex] = array[secondIndex]
  array[secondIndex] = temp
}

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1)
console.log(numbers)