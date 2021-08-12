function mergeArrays(myArray, alicesArray) {
  let mergedArray = []

  let currentIndexMine = 0
  let currentIndexAlices = 0
  let currentIndexMerged = 0

  while (currentIndexMerged < (myArray.length + alicesArray.length)) {
    let isMyArrayExhausted = currentIndexMine >= myArray.length
    let isAlicesArrayExhausted = currentIndexAlices >= alicesArray.length

    if (!isMyArrayExhausted && (isAlicesArrayExhausted ||
      (myArray[currentIndexMine] < alicesArray[currentIndexAlices]))) {
      mergedArray[currentIndexMerged] = myArray[currentIndexMine]
      currentIndexMine += 1
    } else {
      mergedArray[currentIndexMerged] = alicesArray[currentIndexAlices]
      currentIndexAlices += 1
    }
    currentIndexMerged += 1
  }
  return mergedArray
}

console.log(mergeArrays([3, 4, 6, 10, 11, 15], [1, 5, 8, 12, 14, 19]))