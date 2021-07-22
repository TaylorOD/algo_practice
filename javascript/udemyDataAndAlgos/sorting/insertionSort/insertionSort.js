const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

function insertionSort(inputArray) {
  const length = inputArray.length
  for (let indexOne = 0; indexOne < length; indexOne += 1) {

    if (inputArray[indexOne] < inputArray[0]) {
      inputArray.unshift(inputArray.splice(indexOne, 1)[0])
    } else {
      for (let indexTwo = 1; indexTwo < indexOne; indexTwo += 1) {
        if (inputArray[indexOne] > inputArray[indexTwo - 1] && inputArray[indexOne] < inputArray[indexTwo]) {
          inputArray.splice(indexTwo, 0, inputArray.splice(indexOne, 1)[0])
        }
      }
    }
  }
}

insertionSort(numbers)
console.log(numbers)
