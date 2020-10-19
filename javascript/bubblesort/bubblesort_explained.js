// Bubblesort in JavaScript

// create array to be sorted
let bubble = [1, 0, -10, 10000, 993423, 234238423402384, 11, 11, 12, 12, 1239012309128312, 1223, 45065, 55, 344342, 234, 111]

// create function that calls array
function bubbleSort(array) {
  // create var isSorted which is false by default
  let isSorted = false
  // create counter which logs how many are sorted
  let counter = 0
  // create while loop that runs while isSorted is false
  while (!isSorted) {
    // makes isSorted true
    isSorted = true;
    // create forLoop which runs while index is less than the array length - the counter
    for (let i = 0; i < array.length - 1 - counter; i += 1) {
      // create if condition that swaps index number in the array and the number to it's right if array index is larger
      if (array[i] > array[i + 1]) {
        // calls the swap function with vars - can write the swap in this function as well but it slows down the algo
        swap(i, i + 1, array);
        // because the if condition ran and a swap was made that means the array is not sorted so this changes isSorted to false and starts the array again
        isSorted = false;
      }
    }
    // increase the counter by 1 because the first item in the array is sorted
    counter += 1;
  }
  // return the array
  return array;
}
// create swap function to remove it from the bubblesort function
function swap(i, j, array) {
  // set the array J var, which is equal to i + 1, to temp so we can use it later
  const temp = array[j]
  // makes array J the same value as array index
  array[j] = array[i]
  // makes array index equal to temp which swaps the two numers in place
  array[i] = temp
}

console.log(bubbleSort(bubble))