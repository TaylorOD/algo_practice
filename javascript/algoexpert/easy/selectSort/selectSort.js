// Write a function that takes in an array of numbers and returns a sorted version of that array using selection sort.

// input:
// [8, 5, 2, 9, 5, 6, 3]
// output:
// [2, 3, 5, 5, 6, 8, 9]


function selectionSort(array) {
  let startIndex = 0
  while (startIndex < array.length - 1) {
    let smallestIndex = startIndex
    for (let i = startIndex + 1; i < array.length; i += 1) {
      if (array[smallestIndex] > array[i]) {
        smallestIndex = i
      }
    }
    swap(startIndex, smallestIndex, array)
    startIndex += 1
  }
  return array
}

function swap(startIndex, smallestIndex, array) {
  let temp = array[smallestIndex]
  array[smallestIndex] = array[startIndex]
  array[startIndex] = temp
}

console.log(selectionSort([8, 5, 2, 9, 5, 6, 3]))
