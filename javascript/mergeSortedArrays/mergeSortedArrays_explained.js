// Merge two sorted arrays into one sorted array

// Input: [0, 3, 4, 31], [3, 4, 6, 30]
// Output: [0, 3,  3,  4, 4, 6, 30, 31]

// Create Array that takes in two inputs
const mergeSortedArrays = function (arrayOne, arrayTwo) {
  // Create results array
  let result = []

  // Create for loop to push all items in arrayOne into results array
  for (let i = 0; i < arrayOne.length; i += 1) {
    result.push(arrayOne[i])
  }
  // Create for loop to push all items in arrayTwo into results array
  for (let j = 0; j < arrayTwo.length; j += 1) {
    result.push(arrayTwo[j])
  }

  // Create variable that sets isSorted to false
  let isSorted = false
  // While isSorted is false run below
  while (!isSorted) {
    // Set is sorted to true
    isSorted = true;
    // Create for loop that will loop over the results array and swap items if they are not sorted
    for (let i = 0; i < result.length - 1; i += 1) {
      // is result[i] is greater than result[i + 1] than swap them using the helper swap function
      if (result[i] > result[i + 1]) {
        // Call helper swap function
        swap(i, i + 1, result)
        // Set isSorted to false
        isSorted = false;
      }
    }
  }
  // Return result array
  return result
}
// Swap helper function to clean up above code. This could be put directly into the above function
// Takes in the array, index i and index j
function swap (i, j, array) {
  // Create and set temp to array[j] so we can reference it later
  const temp = array[j]
  // Set array[j] equal to array[i] value
  array[j] = array[i]
  // Set array[i] equal to temp value
  array[i] = temp
}

// Call mergeSortedArray with the two input arrays
console.log(mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]))

// Merge and sort at the same time
// Create function that takes in two arrays
function mergeSortedArraysSameTime(arrayOne, arrayTwo){
  // Create variable that will take in two arrays
  const resultMergedArray = []

  // If arrayOne is empty than return array two which is already sorted
  if (arrayOne.length === 0) {
    return arrayTwo
  }
  // If arrayTwo is empty than return array two which is already sorted
  if (arrayTwo.length === 0) {
    return arrayOne
  }

  // Create variable that is equal to the first element of ArrayOne
  let arrayOneCurrent = arrayOne[0]
  // Create variable that is equal to the first element of ArrayTwo
  let arrayTwoCurrent = arrayTwo[0]
  // Create variable i that is equal to 1
  let i = 1
  // Create variable j that is equal to 1
  let j = 1
  
  // While statement deciding if arrayOneCurrent or ArrayTwoCurrent is used
  while (arrayOneCurrent || arrayTwoCurrent) {
    // If ArrayTwoCurrent is undefined move on otherwise if arrayOneCurrent is less than arrayTwoCurrent than add it to resultMergedArray
   if (arrayTwoCurrent === undefined || arrayOneCurrent < arrayTwoCurrent) {
     resultMergedArray.push(arrayOneCurrent)
    //  Set arrayOneCurrent to the arrayOne[i]
     arrayOneCurrent = arrayOne[i]
    //  increment i
     i++
   }   
  //  If the above is not true
   else {
    // Add ArrayTwoCurrent to the resultMergedArray
    resultMergedArray.push(arrayTwoCurrent)
    // Set arrayTwoCurrent to the arrayTwo[j] 
    arrayTwoCurrent = arrayTwo[j]
    // increment j
    j++
   }
  }
  // Return resultMergedArray
  return resultMergedArray
}
// call MergeSortedArray with the two inputs
console.log(mergeSortedArraysSameTime([0, 3, 4, 31], [3, 4, 6, 30]))