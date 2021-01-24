// Given two sorted arrays, merge the second array into the first array while ensuring that the first array remains sorted. 
// Do not use any built-in sort methods.

// Input :
// A : [1 5 8]
// B : [6 9]

// Modified A : [1 5 6 8 9]

const mergeSorted = function (inputArrayOne, inputArrayTwo) {
  let result = []

  for (let i = 0; i < inputArrayOne.length; i += 1) {
    // result.push(inputArrayOne[i])
    for (let j = 0; j < inputArrayTwo.length; j += 1) {
      if (inputArrayOne[i] < inputArrayTwo[j]) {
        result.push(inputArrayOne[i])
      } else if (inputArrayTwo[j] < inputArrayOne[i]) {
        result.push(inputArrayTwo[j])
      }
      
  
    }
  }
  return result
}

console.log(mergeSorted([1, 5, 8], [6, 9]))