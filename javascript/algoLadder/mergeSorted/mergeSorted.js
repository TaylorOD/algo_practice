// Given two sorted arrays, merge the second array into the first array while ensuring that the first array remains sorted. 
// Do not use any built-in sort methods.

// Input :
// A : [1 5 8]
// B : [6 9]

// Modified A : [1 5 6 8 9]

const mergeSorted = function (inputArrayOne, inputArrayTwo) {
  let result = []
  let inputArrayOneIndex = 0
  let inputArrayTwoIndex = 0
  
  while (inputArrayOneIndex < inputArrayOne.length || inputArrayTwoIndex < inputArrayTwo.length) {
    if (typeof inputArrayOne[inputArrayOneIndex] === 'undefined') {
        result.push(inputArrayTwo[inputArrayTwoIndex])
        inputArrayTwoIndex += 1
    } else if (inputArrayOne[inputArrayOneIndex] > inputArrayTwo[inputArrayTwoIndex]) {
        result.push(inputArrayTwo[inputArrayTwoIndex])
        inputArrayTwoIndex += 1
    } else {
        result.push(inputArrayOne[inputArrayOneIndex])
        inputArrayOneIndex += 1
    }
  }
  return result
}

console.log(mergeSorted([1, 5, 8], [6, 9]))