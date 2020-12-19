
const mergeSortedArrays = function (arrayOne, arrayTwo) {
  let result = []

  for (let i = 0; i < arrayOne.length; i += 1) {
    result.push(arrayOne[i])
  }
  for (let j = 0; j < arrayTwo.length; j += 1) {
    result.push(arrayTwo[j])
  }

  let isSorted = false
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < result.length - 1; i += 1) {
      if (result[i] > result[i + 1]) {
        swap(i, i + 1, result)
        isSorted = false;
      }
    }
    
  }
  return result
}

function swap(i, j, array) {
  const temp = array[j]
  array[j] = array[i]
  array[i] = temp
}


console.log(mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]))