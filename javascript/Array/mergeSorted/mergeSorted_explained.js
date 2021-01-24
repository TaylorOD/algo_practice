// Given two sorted arrays, merge the second array into the first array while ensuring that the first array remains sorted. 
// Do not use any built-in sort methods.

// Input :
// A : [1 5 8]
// B : [6 9]

// Modified A : [1 5 6 8 9]

// Create a function that takes in two input arrays
const mergeSorted = function (inputArrayOne, inputArrayTwo) {
  // Create an empty results array
  let result = []
  // Create a pointer for both arrays that we will use to loop through them
  let inputArrayOneIndex = 0
  let inputArrayTwoIndex = 0
  
  // Create a while loop that will run as long as the points on either array are less than the input array lengths. 
  // This will prevent us from having our loop end when one array ends
  while (inputArrayOneIndex < inputArrayOne.length || inputArrayTwoIndex < inputArrayTwo.length) {
    // If our first array pointer comes back as undefined the array has hit its end
    // So we will add the next item from array Two and increment its pointer
    if (typeof inputArrayOne[inputArrayOneIndex] === 'undefined') {
        result.push(inputArrayTwo[inputArrayTwoIndex])
        inputArrayTwoIndex += 1
        // If the pointed element in array one is larger than the pointed element at array two than add the item from array two and increment
    } else if (inputArrayOne[inputArrayOneIndex] > inputArrayTwo[inputArrayTwoIndex]) {
        result.push(inputArrayTwo[inputArrayTwoIndex])
        inputArrayTwoIndex += 1
        // If neither of those things are true than the pointed at item in the first array is the smallest element so it will be added
    } else {
        result.push(inputArrayOne[inputArrayOneIndex])
        inputArrayOneIndex += 1
    }
  }
  // Return the results array
  return result
}
// Call the function with the two test inputs
console.log(mergeSorted([1, 5, 8], [6, 9]))