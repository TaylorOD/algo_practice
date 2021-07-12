function quickSort(inputArray) {
  quickSortHelper(inputArray, 0, inputArray.length - 1)
  return inputArray
}

function quickSortHelper(inputArray, startIndex, endIndex) {
  if (startIndex >= endIndex) {
    return
  }

  const pivotIndex = startIndex
  let leftIndex = startIndex + 1
  let rightIndex = endIndex

  while (rightIndex >= leftIndex) {
    if (inputArray[leftIndex] > inputArray[pivotIndex] && inputArray[rightIndex] < inputArray[pivotIndex]) {
      swap(leftIndex, rightIndex, inputArray)
    }
    if (inputArray[leftIndex] <= inputArray[pivotIndex]) {
      leftIndex += 1
    }
    if (inputArray[rightIndex] >= inputArray[pivotIndex]) {
      rightIndex -= 1
    }
  }
  swap(pivotIndex, rightIndex, inputArray)
  const leftSubarrayIsSmaller = rightIndex - 1 - startIndex < endIndex - (rightIndex + 1)
  if (leftSubarrayIsSmaller) {
    quickSortHelper(inputArray, startIndex, rightIndex - 1)
    quickSortHelper(inputArray, rightIndex + 1, endIndex)
  } else {
    quickSortHelper(inputArray, rightIndex + 1, endIndex)
    quickSortHelper(inputArray, startIndex, rightIndex - 1)
  }
}

function swap(i, j, inputArray) {
  let temp = inputArray[j]
  inputArray[j] = inputArray[i]
  inputArray[i] = temp
}

console.log(quickSort([1, 4, 10, 111, 129, -1]))
