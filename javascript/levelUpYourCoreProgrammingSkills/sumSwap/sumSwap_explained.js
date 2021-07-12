// Write a function that accepts two arrays of integers and finds one number from each array that can be swapped to cause the two array sums to be equal.
// Return the number and the index
// If there is no possible swap that makes the two arrays equal return nil/null.

// Example:
// input:
// arrayOne = [5, 3, 3, 7],
// arrayTwo = [4, 1, 1, 6]
// output:

// Create function that takes in two arrays
const sumSwap = function (arrayOne, arrayTwo) {
  // Create empty vars, hash table, and set result to null by default
  let hashTable = {}
  let sumOne = 0
  let sumTwo = 0
  let result = null

  // Add all element of arrayOne to the hash table and add the number values to sumOne
  arrayOne.forEach((number, index) => {
    sumOne += number
    hashTable[number] = index
  })

  // Add all elements of ArrayTwo number values to sumTwo
  arrayTwo.forEach((number) => {
    sumTwo += number
  })

  // Create the shift_amount which is equal to sumONe - SumTwo / 2
  let shift_amount = (sumOne - sumTwo) / 2

  // Create an each loop that will check if the hash table includes the number + the shift smount and if so returns them
  arrayTwo.forEach((number, index) => {
    if (hashTable[number + shift_amount]) {
      result = [hashTable[number + shift_amount], index]
    }
  })
  // Return result which will be null or our answer
  return result
}
// Call the function with several test inputs
console.log(sumSwap([5, 3, 3, 7], [4, 1, 1, 6]))
console.log(sumSwap([1, 2, 3, 4, 5], [6, 7, 8]))
console.log(sumSwap([5, 30], [(10, 15, 20)]))
