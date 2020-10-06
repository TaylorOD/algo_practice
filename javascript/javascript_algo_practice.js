// Two Number Sum

// function twoNumberSum(array, targetSum) {
//   let result = []
//   let index1 = 0
//   while (index1 < array.length) {
//     let index2 = 0
//     while (index2 < array.length) {
//       if (result.length === 0) {
//         if (index1 !== index2) {
//           if (array[index1] + array[index2] === targetSum) {
//             result.push(array[index1])
//             result.push(array[index2])
//           }
//         }
//       }
//       index2 += 1
//     }
//     index1 += 1
//   }
//   return result
// }

// output = twoNumberSum([3, 5, -14, 8, 11, 1, -1, 6], 10)
// console.log(output)

// Bubble Sort

// this doesnt work I need to learn for loops
// const bubbleSort = function (array) {
//   let sorted = false
//   let index = 0
//   while (!sorted) {
//     sorted = true
//   }
//   while (index < bubble.length - 1) {
//     if (bubble[index] > bubble[index + 1]) {
//       x = bubble[index]
//       bubble[index] = bubble[index + 1]
//       bubble[index + 1] = x
//     }
//     index += 1
//   }
//   return array
// }
// console.log(
//   bubbleSort([
//     1,
//     0,
//     -10,
//     10000,
//     993423,
//     234238423402384,
//     11,
//     11,
//     12,
//     12,
//     1239012309128312,
//     1223,
//     45065,
//     55,
//     0344342,
//     0234,
//     111,
//   ])
// )

// A Very Big Sum

let numbers = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]

function aVeryBigSum(ar) {

  let result = 0
  ar.forEach(function (number) {
    result = result + number
  })
  return result

}

console.log(aVeryBigSum(numbers))