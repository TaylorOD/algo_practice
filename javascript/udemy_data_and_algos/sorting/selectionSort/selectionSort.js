const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

function selectionSort(inputArray) {
  for (let index = 0; index < inputArray.length; index += 1) {
    let min = index
    let temp = inputArray[index]
    for (let indexTwo = index + 1; indexTwo < inputArray.length; indexTwo += 1) {
      if (inputArray[indexTwo] < inputArray[min]) {
        min = indexTwo
      }
    }
    inputArray[index] = inputArray[min]
    inputArray[min] = temp
  }
  return inputArray
}

console.log(selectionSort(numbers))
