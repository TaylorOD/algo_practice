// https://leetcode.com/problems/product-of-array-except-self/

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// Constraints:

// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

// Create function that takes in array
  // Create result/product var = 0
  // Create productArray
  // Create a loop to move through array
    // Create another loop to move through array
    // If inputArray[i] === inputArray[j] {

    // } else {
        // product = product + inputArray[j]
    // }
    // productArray.push(product)
  //

// Return product
//

// On(n^2)
const productOfArrayExceptSelf = (inputArray) => {
  let productArray = []
  let product = 1
  for (let index = 0; index < inputArray.length; index += 1) {
    for (let indexTwo = 0; indexTwo < inputArray.length; indexTwo += 1) {
      if (inputArray[index] === inputArray[indexTwo]) {
      } else {
        product *= inputArray[indexTwo]
      }
    }
    productArray.push(product)
    product = 1
  }
  return productArray
}

console.log(productOfArrayExceptSelf([1,2,3,4]))
console.log(productOfArrayExceptSelf([-1,1,0,-3,3]))

// Create function that takes in input
  // Create result array
  // Create left multiplier
  // Create right multiplier
  // Create first for loopo
    // Add output[index] as right multiplier
    // right multiplier *= inputputarray[index]
  //
  // Create second for loop
    // add output[indexTwo] *= leftMultplier
    // LeftMultiplier *= inputarray[indexTwo]
  //
  // Return result array
//

const productOfArrayExceptSelfLeet = (inputArray) => {
  let resultArray = []
  let leftMulti = 1
  let rightMulti = 1
  for (let index = inputArray.length - 1; index >= 0; index -= 1) {
    resultArray[index] = rightMulti
    rightMulti *= inputArray[index]
  }
  for (let indexTwo = 0; indexTwo < inputArray.length; indexTwo += 1) {
    resultArray[indexTwo] *= leftMulti
    leftMulti *= inputArray[indexTwo]
  }
  return resultArray
}

console.log(productOfArrayExceptSelfLeet([1,2,3,4]))
console.log(productOfArrayExceptSelfLeet([-1,1,0,-3,3]))