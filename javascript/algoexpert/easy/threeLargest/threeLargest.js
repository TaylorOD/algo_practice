// Write a function that takes in an array of at least three integers and, without sorting the array, returns a sorted array of the three largest numbers in the input array. The result array should return duplicates if needed.

function findThreeLargestNumbers(inputArray) {
  const threeLargest = [null, null, null]

  for (const number of inputArray) {
    updateThreeLargest(threeLargest, number)
  }
  return threeLargest
}

function updateThreeLargest(threeLargest, number) {
  if (threeLargest[2] === null || number > threeLargest[2]) {
    shiftAndUpdate(threeLargest, number, 2)
  } else if (threeLargest[1] === null || number > threeLargest[1]) {
    shiftAndUpdate(threeLargest, number, 1)
  } else if (threeLargest[0] === null || number > threeLargest[0]) {
    shiftAndUpdate(threeLargest, number, 0)
  }
}

function shiftAndUpdate(threeLargestInputArray, number, index) {
  for (let i = 0; i <= index; i += 1) {
    if (i === index) {
      threeLargestInputArray[i] = number
    } else {
      threeLargestInputArray[i] = threeLargestInputArray[i + 1]
    }
  }
}

console.log(findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]))