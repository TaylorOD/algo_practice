// Create function that takes in an array and establishes a multiplier variable
function productSum(array, multiplier = 1) {
  // Create the sum variable and set as zero by default
  let sum = 0
  // Create a for of loop that will loop through each element of the array
  for (const element of array) {
    // If the element currently selected is an array
    if (Array.isArray(element)) {
      // Add the result of the recursive call of productSum with the element and the multiplier plus one to the sum.
      // This will work recursively until the else side of this if check is called in one of the recursive functions.
      sum += productSum(element, multiplier + 1)
    } else {
      // If the element is not an array than add it to the sum
      sum += element
    }
  }
  // Return the sum times the multiplier
  return sum * multiplier
}
console.log(productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]))