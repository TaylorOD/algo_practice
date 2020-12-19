// Bubblesort in JavaScript

let bubble = [1, 0, -10, 10000, 993423, 234238423402384, 11, 11, 12, 12, 1239012309128312, 1223, 45065, 55, 344342, 234, 111]

function bubbleSort(array) {
  let isSorted = false
  let counter = 0
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < array.length - 1 - counter; i++) {
      if (array[i] > array[i + 1]) {
        swap(i, i + 1, array);
        isSorted = false;
      }
    }
    counter ++;
  }
  return array;
}

function swap(i, j, array) {
  const temp = array[j]
  array[j] = array[i]
  array[i] = temp
}

console.log(bubbleSort(bubble))