const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

function mergeSort(array) {
  if (array.length === 1) {
    return array
  }
  let length = array.length
  let middle = Math.floor(length / 2)
  let right = array.slice(middle)
  let left = array.slice(0, middle)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  const result = []
  let leftIndex = 0
  let rightIndex = 0

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex])
      leftIndex += 1
    } else {
      result.push(right[rightIndex])
      rightIndex += 1
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

const answer = mergeSort(numbers)
console.log(answer)
