// Write a function that takes in an array of integers and returns that array sorted.
// Use Insertion Sort.

// Input: [8, 5, 2, 9, 5, 6, 3]
// Output: [2, 3, 5, 5, 6, 8, 9]

const insertionSort = function (array) {
  for (let i = 0; i < array.length; i += 1) {
    let j = i
    while (j > 0 && array[j] < array[j - 1]) {
      swap(j, j - 1, array)
      j -= 1
    }
  }
  return array
}

function swap (i, j, array) {
  let temp = array[j]
  array[j] = array[i]
  array[i] = temp
}

console.log(insertionSort([8, 5, 2, 9, 5, 6, 3]))