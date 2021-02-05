// We have a staircase of N steps, and a person has the ability to climb one, two, or three steps at a time.
// How many different possible "paths" can someone take to reach the top?
// Write a recursive function that will calculate this for N steps.

const staircaseProblem = function (numberOfSteps) {
  if (numberOfSteps < 0) {
    return 0
  } else if (numberOfSteps === 1 || numberOfSteps === 0) {
    return 1
  } else {
    return staircaseProblem(numberOfSteps - 1) + staircaseProblem(numberOfSteps - 2) + staircaseProblem(numberOfSteps - 3)
  }
}

console.log(staircaseProblem(6))
