const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

function bubbleSort(input_array) {
  for (let index_two = 0; index_two < input_array.length - 1; index_two += 1)  {
    for (let index = 0; index < input_array.length - 1; index += 1) {
      if (input_array[index] > input_array[index + 1]) {
        let temp = input_array[index]
        input_array[index] = input_array[index + 1]
        input_array[index + 1] = temp;
      }
    }
  }
  return input_array
}

bubbleSort(numbers)
console.log(numbers)
