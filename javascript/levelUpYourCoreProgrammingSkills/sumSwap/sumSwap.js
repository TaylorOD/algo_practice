// Write a function that accepts two arrays of integers and finds one number from each array that can be swapped to cause the two array sums to be equal.
// Return the number and the index
// If there is no possible swap that makes the two arrays equal return nil/null.

// Example:
// input:
// arrayOne = [5, 3, 3, 7],
// arrayTwo = [4, 1, 1, 6]
// output:


const sumSwap = function (arrayOne, arrayTwo) {
  let hashTable = {}
  let sumOne = 0
  let sumTwo = 0
  let result = null

  arrayOne.forEach((number, index) => {
    sumOne += number
    hashTable[number] = index
  })

  arrayTwo.forEach((number) => {
    sumTwo += number
  })

  let shift_amount = (sumOne - sumTwo) / 2

  arrayTwo.forEach((number, index) => {
    if (hashTable[number + shift_amount]) {
      result = [hashTable[number + shift_amount], index]
    }
  })
  return result
}

console.log(sumSwap([5, 3, 3, 7], [4, 1, 1, 6]))
console.log(sumSwap([1, 2, 3, 4, 5], [6, 7, 8]))
console.log(sumSwap([5, 30], [(10, 15, 20)]))