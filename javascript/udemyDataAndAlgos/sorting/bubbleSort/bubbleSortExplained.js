// Build out test input array
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
// Create our function that takes in an input array
function bubbleSort(input_array) {
  // Create our first for loop that we will use to loop over the array
  for (let index_two = 0; index_two < input_array.length - 1; index_two += 1) {
    // Create our inner loop that we will use to loop over each character and swap
    for (let index = 0; index < input_array.length - 1; index += 1) {
      // If the left hand number is larger than the right then swap them
      if (input_array[index] > input_array[index + 1]) {
        let temp = input_array[index]
        input_array[index] = input_array[index + 1]
        input_array[index + 1] = temp
      }
    }
  }
  // Return out input array
  return input_array
}
// Call our function
bubbleSort(numbers)
console.log(numbers)
