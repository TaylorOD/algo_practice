// Two Number Sum - Using while loops

// Create Function that takes in an array and the targeted sum
function twoNumberSum(array, targetSum) {
  // Create empty results array
  let result = []
  // Create index that we will use to loop through the array
  let index1 = 0
  // Create while loop using index1 that will loop through the length of the array
  while (index1 < array.length) {
    // Create second index that we will use to loop through the array
    let index2 = 0
    // Create While loop using the 2nd index so we are looping though each item in the array and comparing it with the first item in the array
    while (index2 < array.length) {
      // If the result array is empty run this code. Which means it will not run once a match is found.
      if (result.length === 0) {
        // Make sure that the index is not being compared with itself
        if (index1 !== index2) {
          // If the the current item in the array plus the item being looped through is equal to the target sum
          if (array[index1] + array[index2] === targetSum) {
            // Add both items to the results array
            result.push(array[index1])
            result.push(array[index2])
          }
        }
      }
      // Increment index2
      index2 += 1
    }
    // Increment index1
    index1 += 1
  }
  // Return the results array
  return result
}
// Create variable using the function with an input
output = twoNumberSum([3, 5, -14, 8, 11, 1, -1, 6], 10)
// Print Output
console.log(output)