// Create our data set that we will sort
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

// Create our function that takes in an array
function mergeSort(array) {
  // If the array length is 1 then return the array because its sorted
  if (array.length === 1) {
    return array
  }
  // Create a length, middle, left, and right arrays. We want to be able to call these.
  let length = array.length
  let middle = Math.floor(length / 2)
  let right = array.slice(middle)
  let left = array.slice(0, middle)
  // Call our function recursively
  return merge(mergeSort(left), mergeSort(right))
}
// Create our merge function that takes in a left and right variable
function merge(left, right) {
  // Create a results array and a left and right index
  const result = []
  let leftIndex = 0
  let rightIndex = 0
  // Create while loop to make sure we still have items to sort
  while (leftIndex < left.length && rightIndex < right.length) {
    // If the left index is smaller than add it to the results array and increment the index
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex])
      leftIndex += 1
      // Else add the right element and increment the index
    } else {
      result.push(right[rightIndex])
      rightIndex += 1
    }
  }
  // Return the results with the new sorted numbers added
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}
// Create a var to store our answer in and display it
const answer = mergeSort(numbers)
console.log(answer)
