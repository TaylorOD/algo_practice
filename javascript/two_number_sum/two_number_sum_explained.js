// Two Number Sum - Using while loops

// 
function twoNumberSum(array, targetSum) {
  let result = []
  let index1 = 0
  while (index1 < array.length) {
    let index2 = 0
    while (index2 < array.length) {
      if (result.length === 0) {
        if (index1 !== index2) {
          if (array[index1] + array[index2] === targetSum) {
            result.push(array[index1])
            result.push(array[index2])
          }
        }
      }
      index2 += 1
    }
    index1 += 1
  }
  return result
}

output = twoNumberSum([3, 5, -14, 8, 11, 1, -1, 6], 10)
console.log(output)