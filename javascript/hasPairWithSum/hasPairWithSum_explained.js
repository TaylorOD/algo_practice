// Take in array and sum. If the array has a pair of numbers in the array that equal the sum return true. Else return false

// O(n^2) - Nested Loops

// Create function that takes in an array and a sum
function hasPairWithSum(array, sum) {

  // Create a for loop that will loop through the array until the last item (array - 1)
  for (let i = 0; i < array.length - 1; i += 1) {
    // Create a nested loop that will loop through the array until the last item (array - 1)
    for (let j = 0; j < array.length - 1; j += 1) {
      // if array[i] plus array[j] are equal to the sum than return true. This will look at every item in the array
      if (array[i] + array[j] === sum) {
        return true
      }
    }
  }
  // else return false
  return false
}
// call the function with an array and a sum
console.log(hasPairWithSum([5,4,3,2,1,7], 9))

// O(n)

// Create the function that takes in an array and a sum
function hasPairWithSumTwo(array, sum) {
  // Create a new empty set
  const mySet = new Set()
  // Create a for loop that will loop through the array
  for (let i = 0; i < array.length; i += 1) {
    // if the set includes a pair number than return true - If the number exists in the set then it will equal the product
    if (mySet.has(array[i])) {
      return true
    }
    // add each index number minus the sum to the set. This allows us to only look and see if the difference is in the array (the if statement above)
    // If 3 exists in the array than that means we have a pair match. We added 3 by subtracting 6 (the first item in the array) from 9 (the sum)
    mySet.add(sum - array[i])
  }
  // If no pair if found return false
  return false
}
// Call the function with an array and sum
console.log(hasPairWithSumTwo([6,4,3,2,1,7], 9))

