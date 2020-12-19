// Return the greatest value from an array of numbers.

// Input: [5, 17, -4, 20, 12, 1000]
// Output: 20

const maxArray = function (array) {
  let largest = array[0]
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > largest) {
      largest = array[i]
    }
  }
  return largest
}

console.log(maxArray([5, 17, -4, 20, 12, 1000]))