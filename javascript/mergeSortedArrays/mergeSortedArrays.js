// Merge two sorted arrays into one sorted array

// Input: [0, 3, 4, 31], [3, 4, 6, 30]
// Output: [0, 3,  3,  4, 4, 6, 30, 31]

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

// Merge and sort at the same time

function mergeSortedArraysSameTime(arrayOne, arrayTwo){
  const resultMergedArray = []

  if (arrayOne.length === 0) {
    return arrayTwo
  }
  if (arrayTwo.length === 0) {
    return arrayOne
  }

  let arrayOneCurrent = arrayOne[0]
  let arrayTwoCurrent = arrayTwo[0]
  let i = 1
  let j = 1
  

  while (arrayOneCurrent || arrayTwoCurrent) {
   if(arrayTwoCurrent === undefined || arrayOneCurrent < arrayTwoCurrent) {
     resultMergedArray.push(arrayOneCurrent)
     arrayOneCurrent = arrayOne[i]
     i++
   }   
   else {
    resultMergedArray.push(arrayTwoCurrent)
     arrayTwoCurrent = arrayTwo[j]
     j++
   }
  }
  return resultMergedArray
}

console.log(mergeSortedArraysSameTime([0, 3, 4, 31], [3, 4, 6, 30]))