// compare two arrays - return true if any item in the first array is the same as any item in the second array. Return false otherwise

// O(n^2) - Poor Time Complexity 

const array1 = ["a", "b", "c", "x"]
const array2 = ["z", "y", "a"]

// Create Function that takes in two arrays
const compareTwoArrays = function (array1, array2) {
  // Create first for loop to loop through the first array - First item to be compared is "a" from Array1
  for (let i = 0; i < array1.length; i += 1) {
    // Create second for loop to loop through the second array
    for (let j = 0; j < array2.length; j += 1) {
      // if the first item in array1 ("a") is equal to the first item in the second array ("z") then return true. Loop through all items
      if (array1[i] === array2[j]) {
        return true
      }
    }
  }
  // If no match return false
  return false
}

console.log(compareTwoArrays(array1, array2))

// O(n) - Better Time Complexity

// Array1 and Array2 are already established above
// const array1 = ["a", "b", "c", "x"]
// const array2 = ["z", "y", "a"]

// Create function that takes in two arrays
const containsCommonItem = function (array1, array2) {
  // Create an object which will be used to map objects from Array1 into
  let objectMap = {}

  // Create first for loop which will be used to map objects from Array1 into it.
  for (let i = 0; i < array1.length; i += 1) {
    // If the ObjectMap object does not include the item from array1
    if (!objectMap[array1[i]]) {
      // Declare the Array1 index as Item
      const item = [array1[i]]
      // Add item to ObjectMap object with a value of True - For example the first item in Array1 would be in ObjectMap as { "a" = true }
      objectMap[item] = true
    }
  }
  // Create the second For Loop which will be used to check if the items included in Array2 already exist in the ObjectMap object
  for (let j = 0; j < array2.length; j += 1) {
    // If ObjectMap object includes any of the items in Array2 (being looped through) return true
    if (objectMap[array2[j]]) {
      return true
    }
  }
  // If no match is found and true is not returned then return false
  return false
}

console.log(containsCommonItem(array1, array2))
