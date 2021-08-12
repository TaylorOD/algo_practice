// Create a function that takes in two SortedArrays
function mergeArrays(myArray, alicesArray) {
  // Set up our mergedArray. Start it as empty
  const mergedArray = []
  // Create three indexs which all start at zero
  let currentIndexAlices = 0
  let currentIndexMine = 0
  let currentIndexMerged = 0
  // Create a while loop that will run as long as the Current Index Merged is less than the two input arrays combined
  while (currentIndexMerged < myArray.length + alicesArray.length) {
    // Create variables to see if either array is ezhusted
    const isMyArrayExhausted = currentIndexMine >= myArray.length
    const isAlicesArrayExhausted = currentIndexAlices >= alicesArray.length

    // Case: next comes from my array
    // My array must not be exhausted, and EITHER:
    // 1) Alice's array IS exhausted, or
    // 2) The current element in my array is less
    //    than the current element in Alice's array
    if (
      !isMyArrayExhausted &&
      (isAlicesArrayExhausted || myArray[currentIndexMine] < alicesArray[currentIndexAlices])
    ) {
      mergedArray[currentIndexMerged] = myArray[currentIndexMine]
      currentIndexMine++

      // Case: next comes from Alice's array
    } else {
      mergedArray[currentIndexMerged] = alicesArray[currentIndexAlices]
      currentIndexAlices++
    }
    // Increment out merged array index
    currentIndexMerged++
  }
  // Return the two sorted arrays
  return mergedArray
}

console.log(mergeArrays([3, 4, 6, 10, 11, 15], [1, 5, 8, 12, 14, 19]))