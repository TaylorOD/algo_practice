// We have a staircase of N steps, and a person has the ability to climb one, two, or three steps at a time.
// How many different possible "paths" can someone take to reach the top?
// Write a recursive function that will calculate this for N steps.

// Create function that takes in an inputNumberOfSteps
const staircaseProblem = function (numberOfSteps) {
  // If the number of steps left if less than zero than return zero
  if (numberOfSteps < 0) {
    return 0
    // Else if the number of steps left is equal to 1 or 0 then return 1
  } else if (numberOfSteps === 1 || numberOfSteps === 0) {
    return 1
    // Else run our function recursively adding the number of steps to our total for 1, 2, and 3 possible steps.
  } else {
    return (
      staircaseProblem(numberOfSteps - 1) + staircaseProblem(numberOfSteps - 2) + staircaseProblem(numberOfSteps - 3)
    )
  }
}
// Call our function with a test input
console.log(staircaseProblem(6))
