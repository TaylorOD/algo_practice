const binarySearch = (inputArray, target) => {
  let low = 0
  let high = inputArray.length - 1

  while (low <= high) {
    let middle = Math.floor((low + high) / 2)

    if (inputArray[middle] === target) {
      return middle
    } else if (inputArray[middle] < target) {
      low = middle + 1
    } else {
      high = middle - 1
    }
  }
  return - 1
}

let findPeak = (inputArray) => {
  let left = 0
  let right = inputArray.length - 1

  while (left < right) {
    let middle = Math.floor((low + high) / 2)
    if (inputArray[low] < inputArray[low + 1]) {
      left = middle + 1
    } else {
      right = middle
    }
  }
  return left
}
