// You are given two parameters, an array and a number. 
// Return a hash whose keys are each of the values from the array parameter, and whose values are the number parameter.

// Input:

// First argument: ["a", "e", "i", "o", "u"]
// Second argument: 1

// Output:

// {
// 'a' => 1,
// 'e' => 1,
// 'i' => 1,
// 'o' => 1,
// 'u' => 1
// }

// Create function that takes in an array and a number
const ETL = function (array, number) {
  // Create an empty result hash which we will use to store our key value pairs
  let result = {}
  // Create a for loop to loop over the input array
  for (let i = 0; i < array.length; i += 1) {
    // Populate the hash with the given array element as the key and the number as the value
    result[array[i]] = number
  }
  // Return the result hash
  return result
}
// Call the function with the given test input
console.log(ETL(["a", "e", "i", "o", "u"], 1))