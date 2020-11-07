// A Very Big Sum

// establish the array of numbers
let numbers = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]

// create the function and an input array
function aVeryBigSum(array) {
  // create result for all numbers to be added to
  let result = 0
  // create each loop that adds each number in the array to result
  array.forEach((number) => {
    // make result equal result plus number
    result = result + number

  })
  // return result
  return result
}
// print result with numbers array
console.log(aVeryBigSum(numbers))
