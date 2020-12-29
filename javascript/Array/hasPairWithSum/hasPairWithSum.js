// Take in array and sum. If the array has a pair of numbers in the array that equal the sum return true. Else return false

// O(n^2) - Nested Loops
function hasPairWithSum(array, sum) {

  for (let i = 0; i < array.length - 1; i += 1) {
    for (let j = 0; j < array.length - 1; j += 1) {
      if (array[i] + array[j] === sum) {
        return true
      }
    }
  }
  return false
}

console.log(hasPairWithSum([5,4,3,2,1,7], 9))

// O(n)
function hasPairWithSumTwo(array, sum) {
  const mySet = new Set()
  for (let i = 0; i < array.length; i += 1) {
    if (mySet.has(array[i])) {
      return true
    }
    mySet.add(sum - array[i])
  }
  return false
}

console.log(hasPairWithSumTwo([6,4,3,2,1,7], 9))



