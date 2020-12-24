// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. 
// For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

// Example: 
// addUp(600) ➞ 180300

// Create addUp function that takes in a variable 
function addUp(num) {
  // Create sum variable
  let sum = 0
  // Create index variable
  let index = 1
  // Create while loop that will continue to loop through the array until index is equal to the input num
	while (index <= num) {
    // Make the sum equal the sum plus the index on each loop
    sum = sum + index
    // Increment the index on each loop
		index += 1
  }
  // Return sum variable 
	return sum
}

// Call AddUp function with input variable 
console.log(addUp(600))