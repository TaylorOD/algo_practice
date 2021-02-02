//Google Question

//Given an array = [2,5,1,2,3,5,1,2,4]
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

// Solved using nested loops - Slow
// Create function that takes in an array
const firstRecurringCharacter = function (array) {
// Create first loop that will loop through the array and be compared to the next item in the array
  for (let i = 0; i < array.length; i += 1) {
    // Create second for loop that will be compared to the first item in the array
    for (let j = 1; j < array.length; j += 1) {
      // If the first item being looped over matches the second item being looped over then return that item
      if (array[j] === array[i]) {
        return array[i]
      }
    }
  }
  // If no match return undefined
  return undefined
}

// Solved using hash - faster
// Create function that takes in an array
const firstRecurringCharacterHash = function (array) {
  // Create result hash to store items from array
  let result = {}

  // Create for loop to loop through the array
  for (let i = 0; i < array.length; i += 1) {
    // If the result hash does not return undefined (meaning that the results hash has the item already) return the item
    if (result[array[i]] !== undefined) {
      return array[i]
      // Else add the item to the results hash
    } else {
      result[array[i]] = i
    }
  }
  // If no match return undefined
  return undefined
}

// Call both functions with two input strings
console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]))
console.log(firstRecurringCharacterHash([2, 5, 1, 2, 3, 5, 1, 2, 4]))
console.log(firstRecurringCharacter([1, 5, 5, 1, 3, 4, 6]))
console.log(firstRecurringCharacterHash([1, 5, 5, 1, 3, 4, 6]))
