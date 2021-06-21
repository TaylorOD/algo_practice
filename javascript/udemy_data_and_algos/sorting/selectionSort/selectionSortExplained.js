// Create our test array
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
// Create our function that takes in an array
function selectionSort(inputArray) {
  // Create a for loop that will run the length of the array
  for (let index = 0; index < inputArray.length; index += 1) {
    //set a min variable to our index
    let min = index
    // Set a temp variable to our inputArray index
    let temp = inputArray[index]
    // Create a second for loop that will run next to our index
    for (let indexTwo = index + 1; indexTwo < inputArray.length; indexTwo += 1) {
      // If the current item is smaller than our min then make our min equal to our current
      if (inputArray[indexTwo] < inputArray[min]) {
        min = indexTwo
      }
    }
    // Set our inputArray[index] equal to our inputArray[min]. The inputArray[index] will move along as we lock in sorted elements due to our
    // first loop
    inputArray[index] = inputArray[min]
    // Set our min to our temp (represents the start of the array)
    inputArray[min] = temp
  }
  // Return our sorted array
  return inputArray
}
// test our function and print our results
console.log(selectionSort(numbers))