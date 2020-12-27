// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, 
// find the final points for the team and return that value.

// Examples
// points(1, 1) ➞ 5
// points(7, 5) ➞ 29

// Create function that takes in two variables 
function points(twoPointers, threePointers) {
  // Return the two pointer variable multiplied by 2 + the three pointer variable multiplied by 3
	return (twoPointers * 2) + (threePointers * 3)
}
// Call points function with 7 and 5
console.log(points(7, 5))